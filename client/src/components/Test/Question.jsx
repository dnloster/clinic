import React, { useCallback } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { json } from './survey';

export default function Question() {
    const survey = new Model(json);

    survey.onComplete.add((sender, options) => {
        let results = Object.keys(sender.data).map((key) => ({ [key]: sender.data[key] }));
        const values = results.map((result) => Object.values(result)[0]);
        const totalScore = values.reduce((total, value) => total + value, 0);
        console.log(totalScore);

        var message = `Bạn đã hoàn thành khảo sát. Tổng điểm của bạn là ${totalScore}.`;
        if (totalScore >= 0 && totalScore <= 5) {
            message += '<br/> Đánh giá mức độ tâm lý: KHÔNG TRẦM CẢM';
        } else if (totalScore >= 6 && totalScore <= 10) {
            message += '<br/> Đánh giá mức độ tâm lý: BÌNH THƯỜNG NHƯNG HAY BUỒN';
        } else if (totalScore >= 11 && totalScore <= 25) {
            message += '<br/> Đánh giá mức độ tâm lý: TRẦM CẢM NHẸ';
        } else if (totalScore >= 26 && totalScore <= 50) {
            message += '<br/> Đánh giá mức độ tâm lý: TRẦM CẢM MỨC ĐỘ TRUNG BÌNH';
        } else if (totalScore >= 51 && totalScore <= 75) {
            message += '<br/> Đánh giá mức độ tâm lý: TRẦM CẢM NẶNG';
        } else if (totalScore >= 76 && totalScore <= 100) {
            message += '<br/> Đánh giá mức độ tâm lý: TRẦM CẢM MỨC ĐỘ NGHIÊM TRỌNG';
        }

        sender.completedHtml = message;
    });
    return <Survey model={survey} />;
}
