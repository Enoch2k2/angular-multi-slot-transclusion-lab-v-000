function UserProfile() {
	return {
		transclude: {
			name: 'h4',
			position: 'h6',
			description: 'p'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<label>Name</label>',
				'<div><span ng-transclude="name"></span></div>',
				'<label>Position</label>',
				'<div><span ng-transclude="position"></span></div>',
				'<label>Description</label>',
				'<div><span ng-transclude="description"></span></div>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
