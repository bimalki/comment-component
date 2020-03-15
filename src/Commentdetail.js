import React from 'react';

const CommentDetail = () => {
    return (
        <div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src ={faker.image.avatar()}/>
					</a>
				<div className="content">
					<a href="/" className="author">
							田中
					</a>
						<div className="metadata">
							<span className="date">本日 PM 6:00</span>
						</div>
						<div className="text">コメント投稿のテスト</div>
				</div>
		</div>
    );
};