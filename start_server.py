import http.server
import socketserver
import webbrowser
import os
import threading
import time

# 设置服务器端口
PORT = 8000

# 获取当前目录作为服务器根目录
handler = http.server.SimpleHTTPRequestHandler

# 创建TCP服务器
with socketserver.TCPServer(("", PORT), handler) as httpd:
    print(f"服务器启动在 http://localhost:{PORT}")
    print(f"请访问 http://localhost:{PORT}/GNSS__Analyzer.html")
    print("按 Ctrl+C 停止服务器")
    
    # 延迟打开浏览器，确保服务器已经启动
    def open_browser():
        time.sleep(1)  # 等待1秒
        webbrowser.open(f"http://localhost:{PORT}/GNSS__Analyzer.html")
    
    # 在单独的线程中打开浏览器
    browser_thread = threading.Thread(target=open_browser)
    browser_thread.daemon = True
    browser_thread.start()
    
    try:
        # 启动服务器
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n服务器已停止")