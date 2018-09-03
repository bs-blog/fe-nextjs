const { database } = require('../../lib/firebaseAdmin')
const ClassDaoStorys = require('../../lib/dao/StoryList')

const addCat = () => {
	console.log(' -=-=-=-= addCat')
	const ref = database.ref('Categorys')
	const configList = ['oeter']
	return Promise.all(
			configList.map(
					item => 
							ref.push().set({
									name: item,
									createdAt: (new Date()).getTime()
							})
			)
	)
}

const fetchStoryList = () => {
	const dao = new ClassDaoStorys(database)
	return dao.once()
}

module.exports = {
		addCat,
		fetchStoryList
}
