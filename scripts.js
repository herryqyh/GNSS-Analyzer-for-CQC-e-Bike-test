// ======== README功能相关函数 ========

// 初始化README功能
function initReadme() {
  const readmeToggle = document.getElementById('readmeToggle');
  const readmeContent = document.getElementById('readmeContent');
  
  if (!readmeToggle || !readmeContent) {
    console.warn('README元素未找到');
    return;
  }
  
  readmeToggle.addEventListener('click', function() {
    const isVisible = readmeContent.classList.contains('show');
    
    if (isVisible) {
      // 隐藏README内容
      readmeContent.classList.remove('show');
      readmeToggle.innerHTML = `
        <span class="readme-icon">📖</span>
        <span>查看使用说明 (README)</span>
        <span class="arrow">▼</span>
      `;
    } else {
      // 显示README内容
      readmeContent.classList.add('show');
      readmeToggle.innerHTML = `
        <span class="readme-icon">📖</span>
        <span>收起使用说明</span>
        <span class="arrow">▲</span>
      `;
      
      // 如果内容是默认的加载状态，则加载README
      if (readmeContent.innerHTML.includes('正在加载使用说明')) {
        loadReadmeContent();
      }
    }
  });
}

// 加载并格式化README内容
function loadReadmeContent() {
  const readmeContent = document.getElementById('readmeContent');
  if (!readmeContent) return;
  
  // 直接使用静态的README内容（从README.md文件转换而来）
  const readmeHtml = `
    <h1>GNSS数据分析工具</h1>

    <h2>项目简介</h2>
    <p>GNSS数据分析工具是一个基于Web的GNSS（全球卫星导航系统）定位数据分析工具，专门用于处理和分析GPS、北斗等卫星导航系统的定位数据。该工具提供了直观的数据处理、分析和可视化功能。</p>

    <h2>主要功能</h2>

    <h3>📁 文件处理</h3>
    <ul>
      <li><strong>Excel文件读取</strong>：支持读取<code>.xlsx</code>和<code>.xls</code>格式的Excel文件</li>
      <li><strong>智能表格检测</strong>：自动检测包含定位数据的表格，无需手动指定</li>
      <li><strong>多种列名支持</strong>：支持多种常见的列名格式（中文、英文）</li>
    </ul>

    <h3>🗺️ 数据解析</h3>
    <ul>
      <li><strong>智能坐标解析</strong>：自动识别和转换不同的经纬度格式
        <ul>
          <li>小数度格式：如116.23</li>
          <li>度分格式：如11613.799520（自动转换为116.229992）</li>
        </ul>
      </li>
      <li><strong>时间格式处理</strong>：支持多种时间格式的解析</li>
      <li><strong>高程数据处理</strong>：支持高程/海拔数据的读取和计算</li>
    </ul>

    <h3>📊 距离计算</h3>
    <ul>
      <li><strong>3D距离计算</strong>：使用Haversine公式计算包含高程差的三维距离</li>
      <li><strong>基准点设置</strong>：用户可自定义基准点的经纬度和高程</li>
      <li><strong>批量计算</strong>：一次性计算所有数据点到基准点的距离</li>
    </ul>

    <h3>📊 数据分析</h3>
    <ul>
      <li><strong>基础统计</strong>：
        <ul>
          <li>平均误差</li>
          <li>最大误差</li>
          <li>最小误差</li>
          <li>数据点数量</li>
          <li>时间范围</li>
        </ul>
      </li>
      <li><strong>CEP95精度</strong>：计算95%分位数精度指标</li>
      <li><strong>时间范围筛选</strong>：可设定特定时间范围进行统计分析</li>
      <li><strong>特殊时间段分析</strong>：
        <ul>
          <li>2-3分钟时间段</li>
          <li>6-7分钟时间段</li>
          <li>不同时间段的数据对比</li>
        </ul>
      </li>
      <li><strong>📈 图表展示</strong>：
        <ul>
          <li>误差变化趋势图表</li>
          <li>Y轴采用对数坐标，便于观察小误差变化</li>
          <li>纵坐标范围0.1-100米，最大值100米</li>
          <li>横坐标显示数据序号（1, 2, 3...）</li>
          <li>红色虚线显示30米误差限值，便于评估精度</li>
          <li>鼠标悬停查看详细数据和具体数值</li>
        </ul>
      </li>
    </ul>

    <h3>📋 数据展示</h3>
    <ul>
      <li><strong>表格显示</strong>：完整的数据详情表格</li>
      <li><strong>智能隐藏</strong>：自动隐藏连续的无效数据点（经纬度为0）</li>
      <li><strong>数据筛选</strong>：支持显示/隐藏经纬度为0的数据行</li>
      <li><strong>行高亮</strong>：不同时间段的数据使用不同颜色高亮显示</li>
      <li><strong>实时更新</strong>：距离计算结果实时更新到表格中</li>
    </ul>

    <h3>📝 操作日志</h3>
    <ul>
      <li><strong>实时日志</strong>：记录所有操作步骤和结果</li>
      <li><strong>分类显示</strong>：不同类型的消息使用不同颜色标识</li>
      <li><strong>自动滚动</strong>：日志自动滚动到最新记录</li>
    </ul>

    <h2>使用方法</h2>

    <h3>1. 准备数据文件</h3>
    <p>确保Excel文件包含以下列：</p>
    <ul>
      <li><strong>定位时间</strong>：时间戳数据</li>
      <li><strong>经度</strong>：经度坐标</li>
      <li><strong>纬度</strong>：纬度坐标</li>
      <li><strong>高程</strong>：海拔高度（可选）</li>
    </ul>

    <h3>2. 打开工具</h3>
    <p>直接用浏览器打开<code>GNSS__Analyzer.html</code>文件</p>

    <h3>3. 上传数据</h3>
    <p>点击文件选择器，选择您的Excel文件。工具会自动检测并读取数据</p>

    <h3>4. 设置基准点</h3>
    <p>在左侧面板中设置基准坐标：</p>
    <ul>
      <li><strong>基准经度</strong>：目标位置的经度</li>
      <li><strong>基准纬度</strong>：目标位置的纬度</li>
      <li><strong>基准高程</strong>：目标位置的高程（米）</li>
      <li><strong>起始时间</strong>：数据记录的起始时间</li>
    </ul>

    <h3>5. 执行分析</h3>
    <p>点击"计算距离"按钮开始分析</p>

    <h3>6. 查看结果</h3>
    <ul>
      <li><strong>统计结果</strong>：在左侧面板查看各项统计指标</li>
      <li><strong>误差图表</strong>：在右侧面板查看误差变化趋势图表</li>
      <li><strong>数据详情</strong>：在下方表格中查看详细数据</li>
      <li><strong>操作日志</strong>：在日志区域查看处理过程</li>
    </ul>

    <h2>数据格式要求</h2>

    <h3>Excel文件格式</h3>
    <table>
      <thead>
        <tr>
          <th>功能</th>
          <th>中文列名</th>
          <th>英文列名</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>时间</td>
          <td>定位时间</td>
          <td>Time, timestamp</td>
          <td>必需</td>
        </tr>
        <tr>
          <td>经度</td>
          <td>经度</td>
          <td>Longitude, longitude, Lon</td>
          <td>必需</td>
        </tr>
        <tr>
          <td>纬度</td>
          <td>纬度</td>
          <td>Latitude, latitude, Lat</td>
          <td>必需</td>
        </tr>
        <tr>
          <td>高程</td>
          <td>高程、海拔</td>
          <td>Altitude, altitude, Elevation, elevation</td>
          <td>可选</td>
        </tr>
      </tbody>
    </table>

    <h3>经纬度格式</h3>
    <p>支持两种格式：</p>
    <ol>
      <li><strong>小数度格式</strong>：116.23（推荐）</li>
      <li><strong>度分格式</strong>：11613.799520（自动转换为116.229992）</li>
    </ol>

    <h2>界面说明</h2>

    <h3>主要区域</h3>
    <ol>
      <li><strong>文件上传区</strong>：位于页面顶部，用于选择Excel文件</li>
      <li><strong>参数设置区</strong>：设置基准坐标和起始时间</li>
      <li><strong>统计结果区</strong>：左侧面板显示分析结果</li>
      <li><strong>数据表格区</strong>：显示详细的数据列表</li>
      <li><strong>操作日志区</strong>：记录所有操作过程</li>
      <li><strong>图表展示区</strong>：右侧面板显示误差变化趋势图表</li>
    </ol>

    <h3>操作按钮</h3>
    <ul>
      <li><strong>计算距离</strong>：执行距离计算和分析</li>
      <li><strong>显示经纬度为0的数据行</strong>：切换无效数据行的显示状态</li>
      <li><strong>查看使用说明</strong>：展开/收起本使用说明</li>
    </ul>

    <h3>高亮说明</h3>
    <ul>
      <li><strong>绿色高亮</strong>：主要统计范围内的数据（5分15秒-5分45秒）</li>
      <li><strong>蓝色高亮</strong>：特殊时间段数据（2-3分钟，6-7分钟）</li>
      <li><strong>省略号</strong>：表示隐藏了连续的无效数据点</li>
    </ul>

    <h2>性能说明</h2>

    <ul>
      <li><strong>支持文件大小</strong>：最大50MB</li>
      <li><strong>推荐数据量</strong>：少于10万行数据可获得最佳性能</li>
      <li><strong>浏览器要求</strong>：现代浏览器，支持HTML5和ES6</li>
    </ul>

    <h2>故障排除</h2>

    <h3>常见问题</h3>
    <ol>
      <li><strong>文件读取失败</strong>：确保文件格式为Excel格式（.xlsx或.xs）</li>
      <li><strong>数据为空</strong>：检查列名是否正确，或尝试使用标准列名</li>
      <li><strong>计算结果异常</strong>：确认基准坐标和时间格式正确</li>
      <li><strong>页面加载缓慢</strong>：大文件处理需要时间，请耐心等待</li>
    </ol>

    <h3>日志查看</h3>
    <p>详细的错误信息会在操作日志中显示，请查看日志区域获取更多信息。</p>

    <h2>版本信息</h2>

    <ul>
      <li><strong>当前版本</strong>：1.0</li>
      <li><strong>更新时间</strong>：2025年</li>
      <li><strong>兼容性</strong>：支持所有现代浏览器</li>
    </ul>

    <hr style="margin: 30px 0; border: none; border-top: 2px solid #ecf0f1;">
    <p style="text-align: center; color: #7f8c8d; font-style: italic;">
      <strong>注意</strong>：本工具为GNSS数据分析专用工具，请确保输入数据的准确性和有效性。
    </p>
  `;
  
  readmeContent.innerHTML = readmeHtml;
  log("✅ README使用说明已加载", 'success');
}

// ======== 工具函数 ========
function log(msg, type = 'info') {
  const logElement = document.getElementById('log');
  const timestamp = new Date().toLocaleTimeString();
  let colorClass = '';
  
  switch(type) {
    case 'error': colorClass = 'error'; break;
    case 'warning': colorClass = 'warning'; break;
    case 'success': colorClass = 'success'; break;
  }
  
  const logEntry = `<span class="${colorClass}">[${timestamp}] ${msg}</span>\n`;
  logElement.innerHTML += logEntry;
  logElement.scrollTop = logElement.scrollHeight; // 自动滚动到底部
  console.log(`[${timestamp}] ${msg}`);
}

// 经纬度格式智能解析
function convertCoord(coord) {
  try {
    // 处理空值或无效值
    if (!coord || coord === '') return NaN;
    
    coord = coord.toString().trim();
    let coordNum = parseFloat(coord);
    
    // 如果是整数部分长度大于3的数字，判定为度分格式（如11613.799520或3359.999760）
    if (Math.abs(coordNum) >= 1000) {
      let deg = Math.floor(coordNum / 100);
      let min = coordNum - deg * 100;
      return deg + min / 60;
    }
    
    // 其他情况作为小数格式处理（如116.23或34.00）
    return coordNum;
  } catch (e) {
    log("经纬度解析错误: " + e, 'error');
    return NaN;
  }
}

// 使用Haversine公式计算两点距离（米），包含高程差
function calcDistance(lat1, lon1, alt1, lat2, lon2, alt2) {
  const R = 6371000; // 地球半径（米）
  const toRad = deg => deg * Math.PI / 180;
  
  // 转换为弧度
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const radLat1 = toRad(lat1);
  const radLat2 = toRad(lat2);
  
  // Haversine公式计算水平距离
  const a = Math.sin(dLat/2) ** 2 +
            Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dLon/2) ** 2;
  const c = 2 * Math.asin(Math.sqrt(a));
  const horizontalDistance = R * c;
  
  // 计算垂直距离（高程差）
  const verticalDistance = Math.abs(alt1 - alt2);
  
  // 计算3D距离（欧几里得距离）
  return Math.sqrt(horizontalDistance ** 2 + verticalDistance ** 2);
}

// 格式化距离显示
function formatDistance(meters) {
  if (isNaN(meters)) return '--';
  return meters.toFixed(2) + ' 米';
}

// 格式化时间范围显示
function formatTimeRange(start, end) {
  if (!start || !end) return '--';
  return `${start.toLocaleString()} - ${end.toLocaleString()}`;
}

// ======== 图表创建函数 ========
function createErrorChart(data, distances, baseLon, baseLat, baseAlt, startTime) {
  // 清除之前的图表
  const chartCanvas = document.getElementById('errorChart');
  if (chartCanvas.chart) {
    chartCanvas.chart.destroy();
    // 强制canvas恢复宽高样式
    chartCanvas.style.width = '100%';
    chartCanvas.style.height = '100%';
    chartCanvas.width = chartCanvas.parentNode.offsetWidth;
    chartCanvas.height = chartCanvas.parentNode.offsetHeight;
  }

  // 准备图表数据
  const chartData = [];
  const chartLabels = [];
  
  data.forEach((point, index) => {
    const distance = distances[index];
    if (!isNaN(distance) && isFinite(distance)) {
      chartData.push(distance);
      chartLabels.push((index + 1).toString());  // 使用序号（从1开始）
    }
  });

  // 如果没有有效数据，显示提示
  if (chartData.length === 0) {
    log("没有有效数据来生成图表", 'warning');
    return;
  }

  // 创建30米限值线数据
  const limitLineData = new Array(chartData.length).fill(30);

  // 设置图表配置
  const config = {
    type: 'line',
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: '误差距离 (米)',
          data: chartData,
          borderColor: '#3498db',
          backgroundColor: 'rgba(52, 152, 219, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.1,
          pointRadius: 1,
          pointHoverRadius: 4
        },
        {
          label: '30米限值',
          data: limitLineData,
          borderColor: '#e74c3c',
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderDash: [5, 5],
          fill: false,
          pointRadius: 0,
          pointHoverRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'GNSS定位误差变化趋势'
        },
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: '数据序号（秒）'
          },
          ticks: {
            maxTicksLimit: 15,
            callback: function(value, index, values) {
              // 只显示关键序号点，避免标签过于密集
              const totalPoints = chartLabels.length;
              if (totalPoints <= 15 || index % Math.ceil(totalPoints / 10) === 0) {
                return chartLabels[index];
              }
              return '';
            }
          }
        },
        y: {
          type: 'logarithmic',
          display: true,
          title: {
            display: true,
            text: '误差距离 (米)'
          },
          min: 0.1,  // 对数坐标的最小值不能为0
          max: 100,  // 纵坐标最大值为100米
          ticks: {
            callback: function(value) {
              if (value >= 1) {
                return value.toFixed(0) + 'm';
              } else {
                return value.toFixed(1) + 'm';
              }
            }
          }
        }
      },
      interaction: {
        intersect: false,
        mode: 'index'
      }
    }
  };

  // 创建图表
  try {
    chartCanvas.chart = new Chart(chartCanvas.getContext('2d'), config);
    log(`✅ 成功生成误差变化趋势图表（共 ${chartData.length} 个数据点），对数坐标+30米限值线`);
  } catch (error) {
    log("图表生成失败: " + error.message, 'error');
    console.error("图表生成错误:", error);
  }
}

// ======== 全局变量 ========
let allData = [];

// ======== Excel 读取部分 ========
document.getElementById('excelFile').addEventListener('change', function(e){
  const file = e.target.files[0];
  if (!file) return;
  
  // 清空之前的数据
  allData = [];
  document.getElementById('dataTable').innerHTML = '';
  resetStats();
  
  log("正在读取文件：" + file.name);
  
  // 检查文件大小，避免处理过大的文件导致性能问题
  if (file.size > 50 * 1024 * 1024) { // 50MB
    log("文件过大，可能导致性能问题，请考虑使用较小的文件", 'warning');
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      // 自动检测合适的sheet
      let targetSheetIndex = 1; // 默认使用第二个sheet
      let sheetData = [];
      let foundValidSheet = false;
      
      // 尝试找到包含定位数据的sheet
      for (let i = 0; i < workbook.SheetNames.length; i++) {
        const testSheet = workbook.SheetNames[i];
        const testData = XLSX.utils.sheet_to_json(workbook.Sheets[testSheet]);
        
        // 检查是否包含所需的列
        if (testData.length > 0) {
          const firstRow = testData[0];
          if ((firstRow["定位时间"] ) && 
              ((firstRow["经度"] ) && 
               (firstRow["纬度"]))) {
            targetSheetIndex = i;
            sheetData = testData;
            foundValidSheet = true;
            log(`找到有效数据sheet: ${testSheet}`, 'success');
            break;
          }
        }
      }
      
      // 如果没有自动找到合适的sheet，使用默认sheet
      if (!foundValidSheet) {
        if (workbook.SheetNames.length >= 1) {
          targetSheetIndex = 0;
          const sheet = workbook.SheetNames[targetSheetIndex];
          sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
          log(`使用默认sheet: ${sheet}`, 'warning');
        } else {
          log("Excel文件不包含任何sheet", 'error');
          return;
        }
      }

      log(`成功读取sheet，共 ${sheetData.length} 行数据`);

      // 提取关键字段，支持多种列名格式
      allData = sheetData.map((row, i) => {
        const t = new Date(
          row["定位时间"] || 
          row["Time"] || 
          row["timestamp"]
        );
        
        // 保存原始值
        const lonRaw = row["经度"] || 
                      row["Longitude"] || 
                      row["longitude"] || 
                      row["Lon"];
                        
        const latRaw = row["纬度"] || 
                      row["Latitude"] || 
                      row["latitude"] || 
                      row["Lat"];
                      
        // 读取高程数据
        const altitude = parseFloat(row["高程"] || 
                                  row["Altitude"] || 
                                  row["altitude"] || 
                                  row["海拔"] || 
                                  row["Elevation"] || 
                                  row["elevation"] || 
                                  0);
        
        // 使用转换函数获取小数格式值用于计算
        const lon = convertCoord(lonRaw);
        const lat = convertCoord(latRaw);
        
        if (isNaN(t.getTime()) || isNaN(lon) || isNaN(lat) || isNaN(altitude)) {
          log(`第${i+2}行数据存在异常: 时间=${row["定位时间"] || row["Time"] || row["timestamp"]}, 经度=${lonRaw}, 纬度=${latRaw}, 高程=${altitude}`, 'warning');
        }
        
        return { 
          time: t, 
          lon: lon,        // 转换后的值
          lat: lat,        // 转换后的值
          altitude: altitude, // 高程值
          originalIndex: i
        };
  // 筛选有效的数据行
  }).filter(r => !isNaN(r.time.getTime()) && !isNaN(r.lon) && !isNaN(r.lat) && !isNaN(r.altitude));

      // 时间升序排序 不要sort，否则遇到无GPS定位的数据行时，会被放到表格最前
      //allData.sort((a,b) => a.time - b.time);

      if (allData.length === 0) {
        log("没有找到有效数据，请检查Excel文件格式", 'error');
        return;
      }

      log(`成功提取 ${allData.length} 条有效记录`, 'success');

      // 不再自动设置基准位置，保留用户设置的值

      // 渲染数据表格
      renderTable(allData);
    } catch (err) {
      log("读取Excel出错: " + err.message, 'error');
    }
  };
  reader.onerror = function() {
    log("文件读取失败", 'error');
  };
  reader.readAsArrayBuffer(file);
});

// 重置统计数据
function resetStats() {
  document.getElementById('avgDistance').textContent = '--';
  document.getElementById('maxDistance').textContent = '--';
  document.getElementById('minDistance').textContent = '--';
  document.getElementById('dataPoints').textContent = '--';
  document.getElementById('timeRange').textContent = '--';
}

// 距离变化趋势图表相关函数已移除

// ======== 渲染表格 ========
function renderTable(data) {
  const table = document.getElementById('dataTable');
  table.innerHTML = '<tr><th>序号（时间）</th><th>定位时间</th><th>经度</th><th>纬度</th><th>高程(米)</th><th>距离(米)</th></tr>';
  
  // 记录数据行在原数据中的索引位置，用于后续更新距离值
  const rowMap = [];
  
  // 存储所有0坐标行组信息，用于后续操作
  const zeroCoordGroups = [];
  let currentZeroGroup = [];
  
  // 第一遍遍历：识别0坐标行组
  data.forEach((row, index) => {
    const isZeroCoord = Math.abs(row.lon) < 0.000001 && Math.abs(row.lat) < 0.000001;
    
    if (isZeroCoord) {
      currentZeroGroup.push({row, index});
    } else {
      if (currentZeroGroup.length > 0) {
        zeroCoordGroups.push([...currentZeroGroup]);
        currentZeroGroup = [];
      }
    }
  });
  
  if (currentZeroGroup.length > 0) {
    zeroCoordGroups.push(currentZeroGroup);
  }
  
  // 将秒数转换为mm:ss格式
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  // 第二遍遍历：渲染所有数据行
  data.forEach((row, index) => {
    const tr = document.createElement('tr');
    tr.dataset.time = row.time.getTime(); // 存储时间戳用于后续高亮
    tr.dataset.originalIndex = index; // 存储原始索引
    
    // 检查是否为0坐标行
    const isZeroCoord = Math.abs(row.lon) < 0.000001 && Math.abs(row.lat) < 0.000001;
    
    if (isZeroCoord) {
      tr.classList.add('zero-coord');
      
      // 默认情况下，只显示0坐标行组组的首尾，其他的隐藏
      let shouldHide = true;
      for (const group of zeroCoordGroups) {
        if (group.length > 0 && (index === group[0].index || index === group[group.length - 1].index)) {
          shouldHide = false;
          break;
        }
      }
      
      if (shouldHide) {
        tr.classList.add('hidden-row');
      }
    }
    
    tr.innerHTML = `
      <td>${formatTime(index + 1)}</td>
      <td>${row.time.toLocaleString()}</td>
      <td>${row.lon.toFixed(6)}</td>
      <td>${row.lat.toFixed(6)}</td>
      <td>${row.altitude.toFixed(2)}</td>
      <td id="distance-${index}">--</td>
    `;
    
    table.appendChild(tr);
    rowMap.push({originalIndex: index, visibleElement: tr, isZeroCoord: isZeroCoord});
  });
  
  // 添加省略号行
  addEllipsisRows(zeroCoordGroups);
  
  // 将rowMap和zeroCoordGroups保存到表格元素上
  table._rowMap = rowMap;
  table._zeroCoordGroups = zeroCoordGroups;
  
  // 更新显示/隐藏按钮状态
  updateToggleButton();
  
  // 添加省略号行
  function addEllipsisRows(zeroGroups) {
    const tbody = table.querySelector('tbody') || table;
    
    zeroGroups.forEach(group => {
      if (group.length > 2) {
        // 找到最后一个显示的行的位置
        const lastVisibleRow = document.querySelector(`[data-original-index="${group[0].index}"]`);
        if (lastVisibleRow) {
          const ellipsisTr = document.createElement('tr');
          ellipsisTr.className = 'ellipsis-row';
          ellipsisTr.dataset.groupStart = group[0].index;
          ellipsisTr.dataset.groupEnd = group[group.length - 1].index;
          ellipsisTr.innerHTML = `<td colspan="6">省略 ${group.length - 2} 个连续的经纬度为0的数据点...</td>`;
          
          // 插入到第一个显示的0坐标行之后
          lastVisibleRow.parentNode.insertBefore(ellipsisTr, lastVisibleRow.nextSibling);
        }
      }
    });
  }
}

// 更新切换按钮文本和状态
function updateToggleButton() {
  const button = document.getElementById('toggleZeroCoords');
  const hasHiddenRows = document.querySelectorAll('.zero-coord.hidden-row').length > 0;
  
  if (hasHiddenRows) {
    button.textContent = '显示所有经纬度为0的数据行';
  } else {
    button.textContent = '缩略显示首尾经纬度为0的数据行';
  }
}

// 更新表格中的距离数据
function updateTableWithDistances(data, distances) {
  // 先清除所有距离值
  document.querySelectorAll('[id^="distance-"]').forEach(cell => {
    cell.textContent = '--';
  });
  

  
  // 更新选中数据的距离值并高亮
  data.forEach((row, index) => {
    // 找到在allData中的索引
    const allDataIndex = allData.findIndex(d => d.time.getTime() === row.time.getTime());
    if (allDataIndex >= 0) {
      const distanceCell = document.getElementById(`distance-${allDataIndex}`);
      if (distanceCell && distances[index] !== undefined) {
        distanceCell.textContent = distances[index].toFixed(2);
        
        // 高亮该行
        const rowElement = distanceCell.closest('tr');
        if (rowElement) {
          rowElement.classList.add('highlight');
        }
      }
    }
  });
}

// createDistanceChart函数已移除

// 页面加载时检测当前协议并显示提示
window.addEventListener('DOMContentLoaded', () => {
  const protocol = window.location.protocol;
  const tipElement = document.getElementById('protocolTip');
  
  // 检查tipElement是否存在
  if (tipElement) {
    if (protocol === 'file:') {
      // tipElement.textContent = '✓ 当前使用文件协议访问，工具应正常工作';
      tipElement.className = 'success';
    } else if (protocol === 'http:' || protocol === 'https:') {
      tipElement.textContent = '✓ 当前使用HTTP/HTTPS协议访问';
      tipElement.className = 'success';
    } else {
      tipElement.textContent = '⚠️ 警告：当前协议可能不支持所有功能，请使用文件协议或HTTP服务器访问';
      tipElement.className = 'warning';
    }
  }

  
  // 为切换按钮添加事件监听器
  document.getElementById('toggleZeroCoords').addEventListener('click', toggleZeroCoordinates);
  
  // 初始化README功能
  initReadme();
});

// 切换经纬度为0的数据行的显示状态
function toggleZeroCoordinates() {
  const zeroCoordRows = document.querySelectorAll('.zero-coord');
  const ellipsisRows = document.querySelectorAll('.ellipsis-row');
  const hasHiddenZeroRows = document.querySelectorAll('.zero-coord.hidden-row').length > 0;
  
  if (hasHiddenZeroRows) {
    // 当前状态：仅显示0坐标行的头尾，点击后显示所有数据
    zeroCoordRows.forEach(row => {
      row.classList.remove('hidden-row');
    });
    
    // 隐藏省略号行
    ellipsisRows.forEach(row => {
      row.classList.add('hidden-row');
    });
  } else {
    // 当前状态：显示所有数据，点击后只显示0坐标行的头尾
    const table = document.getElementById('dataTable');
    const zeroGroups = table._zeroCoordGroups || [];
    
    zeroCoordRows.forEach(row => {
      const originalIndex = parseInt(row.dataset.originalIndex);
      let shouldHide = true;
      
      // 检查是否为0坐标行组的首尾
      for (const group of zeroGroups) {
        if (group.length > 0 && (originalIndex === group[0].index || originalIndex === group[group.length - 1].index)) {
          shouldHide = false;
          break;
        }
      }
      
      if (shouldHide) {
        row.classList.add('hidden-row');
      } else {
        row.classList.remove('hidden-row');
      }
    });
    
    // 显示省略号行
    ellipsisRows.forEach(row => {
      row.classList.remove('hidden-row');
    });
  }
  
  // 更新按钮状态
  updateToggleButton();
}

// ======== 计算按钮事件 ========
document.getElementById('calcBtn').addEventListener('click', () => {
  document.getElementById('avgDistance').textContent = '';
  Array.from(document.querySelectorAll('#dataTable tr')).forEach(tr => {
    tr.classList.remove('highlight');
    tr.classList.remove('highlight-special');
  });
  document.getElementById('log').textContent = '';

  try {
    const baseLon = convertCoord(parseFloat(document.getElementById('baseLon').value));
    const baseLat = convertCoord(parseFloat(document.getElementById('baseLat').value));
    const baseAlt = parseFloat(document.getElementById('baseAlt').value);
    const startTime = new Date(document.getElementById('startTime').value);

    if (isNaN(baseLon) || isNaN(baseLat) || isNaN(baseAlt) || isNaN(startTime)) {
      log("⚠️ 请确认输入格式正确（时间、经纬度和高程）");
      return;
    }
    
    log(`使用基准点：经度=${baseLon.toFixed(6)}, 纬度=${baseLat.toFixed(6)}, 高程=${baseAlt.toFixed(2)}米`);

    // 筛选时间范围（5分15秒至5分45秒）- 主要统计范围
    const start = new Date(startTime.getTime() + 5*60*1000 + 15*1000);
    const end = new Date(startTime.getTime() + 5*60*1000 + 45*1000);
    log(`筛选时间范围：${start.toLocaleString()} - ${end.toLocaleString()}`);

    // 特殊时间段1：2-3分钟
    const specialStart1 = new Date(startTime.getTime() + 2*60*1000);
    const specialEnd1 = new Date(startTime.getTime() + 3*60*1000);
    // 特殊时间段2：6-7分钟
    const specialStart2 = new Date(startTime.getTime() + 6*60*1000);
    const specialEnd2 = new Date(startTime.getTime() + 7*60*1000);

    log(`特殊时间段1（仅B1c）：${specialStart1.toLocaleString()} - ${specialEnd1.toLocaleString()}`);
    log(`特殊时间段2（仅B2a）：${specialStart2.toLocaleString()} - ${specialEnd2.toLocaleString()}`);

    // 计算所有数据的距离
    const allDistances = allData.map(d => {
      return calcDistance(baseLat, baseLon, baseAlt, d.lat, d.lon, d.altitude);
    });
    
    // 更新所有数据行的距离值
    allData.forEach((row, index) => {
      const distanceCell = document.getElementById(`distance-${index}`);
      if (distanceCell && allDistances[index] !== undefined) {
        distanceCell.textContent = allDistances[index].toFixed(2);
      }
    });
    
    log(`✅ 已计算所有 ${allData.length} 行数据的距离`);

    // 获取主要统计范围的数据用于统计CEP95等结果
    const selected = allData.filter(d => d.time >= start && d.time <= end);
    if (selected.length === 0) {
      log("未找到时间范围内的数据");
      return;
    }

    // 获取主要范围的距离（用于统计）
    const selectedDistances = selected.map(d => {
      return calcDistance(baseLat, baseLon, baseAlt, d.lat, d.lon, d.altitude);
    });

    // 获取特殊时间段1的数据
    const specialSelected1 = allData.filter(d => d.time >= specialStart1 && d.time <= specialEnd1);
    // 获取特殊时间段2的数据
    const specialSelected2 = allData.filter(d => d.time >= specialStart2 && d.time <= specialEnd2);

    // 计算特殊时间段1的距离
    const specialDistances1 = specialSelected1.map(d => {
      return calcDistance(baseLat, baseLon, baseAlt, d.lat, d.lon, d.altitude);
    });

    // 计算特殊时间段2的距离
    const specialDistances2 = specialSelected2.map(d => {
      return calcDistance(baseLat, baseLon, baseAlt, d.lat, d.lon, d.altitude);
    });

    // 计算主要范围的统计值
    const avg = selectedDistances.reduce((a,b)=>a+b,0)/selectedDistances.length;
    const max = Math.max(...selectedDistances);
    const min = Math.min(...selectedDistances);
    const count = selected.length;
    const firstTime = selected[0]?.time;
    const lastTime = selected[selected.length - 1]?.time;
    const timeRangeText = firstTime && lastTime ? `${firstTime.toLocaleTimeString()} - ${lastTime.toLocaleTimeString()}` : '--';
    
    // 计算CEP95（95%分位数）
    const sortedDistances = [...selectedDistances].sort((a, b) => a - b);
    const cep95Index = Math.ceil(sortedDistances.length * 0.95) - 1;
    const cep95 = sortedDistances[cep95Index];
    
    // 显示所有统计值
    document.getElementById('avgDistance').textContent = avg.toFixed(2) + ' 米';
     document.getElementById('maxDistance').textContent = max.toFixed(2) + ' 米';
     document.getElementById('minDistance').textContent = min.toFixed(2) + ' 米';
    document.getElementById('dataPoints').textContent = count;
    document.getElementById('timeRange').textContent = timeRangeText;
    
    // 显示CEP95值（以统一的stats-item样式）
    if (!document.getElementById('cep95Value')) {
      // 如果CEP95元素不存在，创建它
      const statsContainer = document.querySelector('.stats-grid');
      const cep95Container = document.createElement('div');
      cep95Container.className = 'stat-item full-width';
      cep95Container.innerHTML = `
        <div class="stat-label">CEP95精度</div>
        <div class="stat-value" id="cep95Value"></div>
      `;
      // 插入到平均距离之后
      const avgContainer = document.querySelector('.stat-item');
      avgContainer.parentNode.insertBefore(cep95Container, avgContainer.nextSibling);
    }
    document.getElementById('cep95Value').textContent = `${cep95.toFixed(2)} 米`;
    
    // 高亮显示主要统计范围的行
    selected.forEach((row, index) => {
      const allDataIndex = allData.findIndex(d => d.time.getTime() === row.time.getTime());
      if (allDataIndex >= 0) {
        const distanceCell = document.getElementById(`distance-${allDataIndex}`);
        if (distanceCell) {
          const rowElement = distanceCell.closest('tr');
          if (rowElement) {
            rowElement.classList.add('highlight');
          }
        }
      }
    });

    log(`✅ 成功匹配 ${selected.length} 行，平均距离 ${avg.toFixed(2)} 米，CEP95精度 ${cep95.toFixed(2)} 米`);

    // 更新特殊时间段1的数据（不同的高亮样式）
    if (specialSelected1.length > 0) {
      specialSelected1.forEach((row, index) => {
        const allDataIndex = allData.findIndex(d => d.time.getTime() === row.time.getTime());
        if (allDataIndex >= 0) {
          const distanceCell = document.getElementById(`distance-${allDataIndex}`);
          if (distanceCell) {
            const rowElement = distanceCell.closest('tr');
            if (rowElement) {
              rowElement.classList.add('highlight-special');
            }
          }
        }
      });
      const specialAvg1 = specialDistances1.reduce((a,b)=>a+b,0)/specialDistances1.length;
      log(`✅ 特殊时间段1匹配 ${specialSelected1.length} 行，平均距离 ${specialAvg1.toFixed(2)} 米（不纳入统计）`, 'warning');
    }

    // 更新特殊时间段2的数据（不同的高亮样式）
    if (specialSelected2.length > 0) {
      specialSelected2.forEach((row, index) => {
        const allDataIndex = allData.findIndex(d => d.time.getTime() === row.time.getTime());
        if (allDataIndex >= 0) {
          const distanceCell = document.getElementById(`distance-${allDataIndex}`);
          if (distanceCell) {
            const rowElement = distanceCell.closest('tr');
            if (rowElement) {
              rowElement.classList.add('highlight-special');
            }
          }
        }
      });
      const specialAvg2 = specialDistances2.reduce((a,b)=>a+b,0)/specialDistances2.length;
      log(`✅ 特殊时间段2匹配 ${specialSelected2.length} 行，平均距离 ${specialAvg2.toFixed(2)} 米（不纳入统计）`, 'warning');
    }
    
    // 创建误差变化趋势图表
    createErrorChart(allData, allDistances, baseLon, baseLat, baseAlt, startTime);
    
  } catch (e) {
    log("计算出错: " + e.message || e.toString(), 'error');
    console.error("详细错误信息:", e);
  }
});
