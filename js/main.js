const voteBtn = document.querySelector('.article-actions-plus');
let count = 1;


voteBtn.addEventListener('click',() => {
	if (count == 0 ) {
		voteBtn.style.backgroundColor = '#9f2f2f';
		count = 1;
	} else {
		voteBtn.style.backgroundColor = '#6B8E23';
		count = 0;
	}
});

const commentForm = document.querySelector('.comments-form');
const avatar = document.querySelector('.article-avatar');
const commentText = document.getElementsByName('comment')
const commentSubmit = document.querySelector('comments-submit');
const commentReply = document.querySelector('comment-reply');

commentReply.addEventListener('click',() => {
	
});