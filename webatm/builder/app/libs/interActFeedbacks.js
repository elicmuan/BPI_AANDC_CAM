define([], function() {
	var feedbacks = {
		feedbacks: [],

		add: function(obj) {
			this.feedbacks.push(obj);
		},

		removeAll : function()
		{
			this.feedbacks = [];
		}
	};

	return feedbacks;
});