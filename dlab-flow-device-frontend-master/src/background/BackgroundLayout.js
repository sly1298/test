import React from 'react';
import './BackgroundLayout.css'; // 배경 레이아웃 전용 스타일

function BackgroundLayout({ children }) {
    return (
        <div className="background">
            {/*<div className="left-background">*/}
            {/*    /!* 왼쪽 섹션 콘텐츠 *!/*/}
            {/*</div>*/}
            {/*<div className="right-background">*/}
            {/*    /!* 오른쪽 섹션 콘텐츠 *!/*/}
            {/*</div>*/}
            <div className="overlay-box">
                {children} {/* 자식 요소를 렌더링 */}
            </div>
        </div>

    );
}

export default BackgroundLayout;
