// 필요한 모듈 가져오기
import fs from 'fs';
import path from 'path';

// 페이지 컴포넌트
const YourComponent = async () => {
  const parentDir = path.basename(__dirname); // 상위 폴더 경로
  
  const directoryPath = path.join(process.cwd(), parentDir); // 'app' 현재 상위 폴더 경로
  const filenames = fs.readdirSync(directoryPath); // 파일 목록 가져오기

  return (
    <div>
      <h1>파일 목록</h1>
      <ul>
        {filenames.map((filename) => (
          <li key={filename}>{filename}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
