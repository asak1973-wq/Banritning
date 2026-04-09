# Banritning
Banritningsverktyg för WE och banhoppning
<!DOCTYPE html><html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Smedstorps RS – Banritning</title>
  <style>
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
   
      :root {
          --bg: #f4f2ee;
          --surface: #ffffff;
          --panel: #1e293b;
          --panel-text: #f8fafc;
          --accent: #c2410c;
          --accent-hover: #9a3412;
          --primary: #2563eb;
          --border: #e2e8f0;
          --text-main: #334155;
          --text-muted: #64748b;
          --danger: #dc2626;
          --danger-hover: #b91c1c;
      }








      * { box-sizing: border-box; margin: 0; padding: 0; }
   
      body {
          font-family: 'DM Sans', sans-serif;
          background: var(--bg);
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          color: var(--text-main);
      }








      #topbar {
          background: var(--panel);
          color: var(--panel-text);
          display: flex;
          align-items: center;
          padding: 0 20px;
          height: 60px;
          gap: 12px;
          flex-shrink: 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          z-index: 50;
      }








      #topbar h1 {
          font-size: 16px;
          font-weight: 700;
          margin-right: auto;
          letter-spacing: 0.05em;
          text-transform: uppercase;
      }








      #topbar button {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.2s;
      }








      #topbar button:hover { background: rgba(255,255,255,0.2); }
      #topbar button.primary { background: var(--accent); border-color: var(--accent); }
      #topbar button.primary:hover { background: var(--accent-hover); }
      #topbar button.danger { background: var(--danger); border-color: var(--danger); }
      #topbar button.danger:hover { background: var(--danger-hover); }
      #topbar button.help-btn { background: #64748b; border: none; font-weight: bold; width: 34px; padding: 8px 0; border-radius: 50%; }








      #main { display: flex; flex: 1; overflow: hidden; position: relative; }








      #sidebar, #infobar {
          width: 320px;
          background: var(--surface);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          padding: 20px;
          gap: 15px;
          border-right: 1px solid var(--border);
          z-index: 40;
          transition: transform 0.3s ease, width 0.3s ease, padding 0.3s ease;
      }








      #infobar {
          border-right: none;
          border-left: 1px solid var(--border);
          position: relative;
      }








      #infobar.collapsed {
          width: 0;
          padding: 0;
          overflow: hidden;
          border-left: none;
      }








      .toggle-info-btn {
          position: absolute;
          left: -30px;
          top: 20px;
          width: 30px;
          height: 60px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-right: none;
          border-radius: 8px 0 0 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          z-index: 45;
          box-shadow: -2px 0 5px rgba(0,0,0,0.05);
      }








      .section-title {
          font-size: 11px;
          font-weight: 800;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1.5px; margin-bottom: 5px;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
      }








      .section-title::after { content: ""; flex: 1; height: 1px; background: var(--border); }








      .tool-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }








      .tool-btn {
          background: #fff;
          border: 1px solid var(--border);
          padding: 10px 6px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          transition: all 0.2s;
          font-size: 11px;
          font-weight: 500;
          text-align: center;
          color: var(--text-main);
      }








      .tool-btn:hover { border-color: var(--primary); color: var(--primary); background: #eff6ff; }
      .tool-btn.active { background: #2563eb; color: white; border-color: #2563eb; }
      .tool-btn.full { grid-column: span 2; }








      .input-group { display: flex; flex-direction: column; gap: 4px; }
      .input-group label { font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; }
      .input-group input, .input-group textarea, .input-group select {
          padding: 8px;
          border: 1px solid var(--border);
          border-radius: 6px;
          font-family: inherit;
          font-size: 13px;
      }








      .custom-size-inputs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 5px;
      }








      #canvas-container {
          flex: 1;
          position: relative;
          background: #cbd5e1;
          overflow: auto;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 40px;
          border: 2px solid #e5e7eb;
      }




      #canvas-container::after {
          content: "";
          display: block;
          min-height: 400px;
          width: 1px;
          flex-shrink: 0;
      }








      #canvas-wrapper {
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          background: #fff;
          transform-origin: top left;
          transition: transform 0.1s ease-out;
          flex-shrink: 0;
          margin: 0 auto;
          border: 20px solid black;
          padding: 2px;
          box-sizing: content-box;
      }








      .zoom-sidebar-container {
          background: #f8fafc;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid var(--border);
          margin-top: 8px;
          display: flex;
          flex-direction: column;
          gap: 8px;
      }








      .zoom-sidebar-container div {
          display: flex;
          justify-content: space-between;
          align-items: center;
      }








      #selection-tools {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--panel);
          padding: 10px 20px;
          border-radius: 40px;
          display: none;
          gap: 20px;
          z-index: 100;
      }








      #selection-tools button {
          background: transparent; border: none; color: #fff; cursor: pointer; font-size: 12px; font-weight: 600;
      }








      #modal-overlay, #pen-modal-overlay, #num-modal-overlay, #text-modal-overlay, #marker-modal-overlay, #bell-modal-overlay, #save-modal-overlay, #help-modal-overlay, #clear-modal-overlay {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.5); display: none; align-items: center; justify-content: center; z-index: 1000;
      }
      #modal-content, #pen-modal-content, #num-modal-content, #text-modal-content, #marker-modal-content, #bell-modal-content, #save-modal-content, #help-modal-content, #clear-modal-content {
          background: white; padding: 30px; border-radius: 12px; width: 420px;
          display: flex; flex-direction: column; gap: 15px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
      }
      #help-modal-content { width: 550px; max-height: 80vh; overflow-y: auto; }
      #modal-content h2, #pen-modal-content h2, #num-modal-content h2, #text-modal-content h2, #marker-modal-content h2, #bell-modal-content h2, #save-modal-content h2, #help-modal-content h2, #clear-modal-content h2 { font-size: 18px; margin-bottom: 10px; }
     
      .help-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
      .help-list li { font-size: 14px; line-height: 1.5; color: var(--text-main); border-bottom: 1px solid var(--border); padding-bottom: 8px; }
      .help-list b { color: var(--primary); }








      .modal-btn {
          padding: 12px; border: 1px solid var(--border); border-radius: 8px; cursor: pointer;
          text-align: left; transition: all 0.2s; background: white; font-weight: 500;
      }
      .modal-btn:hover { background: #f1f5f9; border-color: var(--primary); }








      ::-webkit-scrollbar { width: 8px; height: 8px; }
      ::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 10px; }
  </style>
</head>
<body>








<!-- Modaler -->
<div id="help-modal-overlay" onclick="closeHelpModal()">
  <div id="help-modal-content" onclick="event.stopPropagation()">
      <h2>Hjälp & Instruktioner</h2>
      <ul class="help-list">
          <li><b>Lägg till hinder:</b> Klicka på en knapp i sidopanelen för att placera ett hinder i mitten av banan.</li>
          <li><b>Flytta:</b> Klicka och dra hinder direkt på banan.</li>
          <li><b>Rotera:</b> Markera ett hinder så visas en meny längst ner. Använd knapparna ↺/↻ eller dra i den lilla cirkeln ovanför hindret.</li>
          <li><b>Rita ridväg:</b> Klicka på "✏️ Rita ridväg". Du kan nu rita fritt med musen. Klicka på knappen igen för att sluta rita.</li>
          <li><b>Radera:</b> Markera ett hinder och klicka på "Radera" i den svarta menyn längst ner eller tryck på <b>Delete</b> eller <b>Backspace</b> på tangentbordet.</li>
          <li><b>Spara & Öppna:</b> Använd "Spara Fil" för att ladda ner ditt arbete som en .json-fil. För att fortsätta senare, använd "Öppna Fil" och välj filen från din dator.</li>
          <li><b>Exportera:</b> "Exportera PDF" skapar ett färdigt banskiss blad med all textinfo du fyllt i till höger.</li>
      </ul>
      <button class="modal-btn" onclick="closeHelpModal()" style="text-align: center; background: var(--primary); color: white; margin-top: 10px;">Jag förstår</button>
  </div>
</div>








<div id="save-modal-overlay" onclick="closeSaveModal()">
  <div id="save-modal-content" onclick="event.stopPropagation()">
      <h2>Spara Banritning</h2>
      <div class="input-group">
          <label>Ange filnamn</label>
          <input type="text" id="save-filename" placeholder="Ex: WE_LD_Banritning" onkeyup="if(event.key==='Enter') executeSave()">
      </div>
      <button class="modal-btn" onclick="executeSave()" style="text-align: center; background: var(--primary); color: white;">Spara på datorn</button>
      <button onclick="closeSaveModal()" style="margin-top: 10px; background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 12px; align-self: center;">Avbryt</button>
  </div>
</div>








<div id="modal-overlay" onclick="closeModal()">
  <div id="modal-content" onclick="event.stopPropagation()">
      <h2>Välj variant för Sidvärts</h2>
      <button class="modal-btn" onclick="addSideways(1)">1. Två parallella bommar (2.5m mellanrum)</button>
      <button class="modal-btn" onclick="addSideways(2)">2. En bom (4m)</button>
      <button class="modal-btn" onclick="addSideways(3)">3. Två bommar på linje (2m mellanrum)</button>
      <button class="modal-btn" onclick="addSideways(4)">4. Två bommar som ett L (vinkelräta)</button>
      <button onclick="closeModal()" style="margin-top: 10px; background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 12px; align-self: center;">Avbryt</button>
  </div>
</div>








<div id="bell-modal-overlay" onclick="closeBellModal()">
  <div id="bell-modal-content" onclick="event.stopPropagation()">
      <h2>Välj variant för Klocka</h2>
      <button class="modal-btn" onclick="addBellOption(1)">Rak klockkorridor</button>
      <button class="modal-btn" onclick="addBellOption(2)">L-formad klockkorridor</button>
      <button onclick="closeBellModal()" style="margin-top: 10px; background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 12px; align-self: center;">Avbryt</button>
  </div>
</div>








<div id="pen-modal-overlay" onclick="closePenModal()">
  <div id="pen-modal-content" onclick="event.stopPropagation()">
      <h2>Välj storlek på Fålla</h2>
      <button class="modal-btn" onclick="addPenWithSize(6)">Fålla 6 meter (ytterdiameter)</button>
      <button class="modal-btn" onclick="addPenWithSize(8)">Fålla 8 meter (ytterdiameter)</button>
      <button class="modal-btn" onclick="addPenWithSize(10)">Fålla 10 meter (ytterdiameter)</button>
      <button onclick="closePenModal()" style="margin-top: 10px; background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 12px; align-self: center;">Avbryt</button>
  </div>
</div>








<div id="num-modal-overlay" onclick="closeNumModal()">
  <div id="num-modal-content" onclick="event.stopPropagation()">
      <h2>Numrera hinder</h2>
      <div class="input-group">
          <label>Ange siffra eller text</label>
          <input type="text" id="obstacle-number" placeholder="Ex: 1, 2a, 3..." onkeyup="if(event.key==='Enter') addObstacleNumber()">
      </div>
      <button class="modal-btn" onclick="addObstacleNumber()" style="text-align: center; background: var(--primary); color: white;">Lägg till på banan</button>
      <button onclick="closeNumModal()" style="margin-top: 10px; background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 12px; align-self: center;">Avbryt</button>
  </div>
</div>




<!-- Modal för Fri Text -->
<div id="text-modal-overlay" onclick="closeTextModal()">
  <div id="text-modal-content" onclick="event.stopPropagation()">
      <h2>Infoga text</h2>
      <div class="input-group">
          <label>Skriv din text</label>
          <input type="text" id="free-text-input" placeholder="Ex: Galopp, Halt, Valfri text..." onkeyup="if(event.key==='Enter') addFreeText()">
      </div>
      <button class="modal-btn" onclick="addFreeText()" style="text-align: center; background: var(--primary); color: white;">Lägg till på banan</button>
      <button onclick="closeTextModal()" style="margin-top: 10px; background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 12px; align-self: center;">Avbryt</button>
  </div>
</div>








<div id="marker-modal-overlay" onclick="closeMarkerModal()">
  <div id="marker-modal-content" onclick="event.stopPropagation()">
      <h2>Avstånd för markering</h2>
      <button class="modal-btn" onclick="createObstacleMarkers(2.5)">2,5 meter avstånd</button>
      <button class="modal-btn" onclick="createObstacleMarkers(3.5)">3,5 meter avstånd</button>
      <button class="modal-btn" onclick="createObstacleMarkers(4.5)">4,5 meter avstånd</button>
      <button onclick="closeMarkerModal()" style="margin-top: 10px; background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 12px; align-self: center;">Avbryt</button>
  </div>
</div>








<div id="clear-modal-overlay" onclick="closeClearModal()">
  <div id="clear-modal-content" onclick="event.stopPropagation()">
      <h2>Rensa banskiss?</h2>
      <p style="font-size: 14px; color: var(--text-main);">Är du säker på att du vill ta bort alla hinder och objekt från banan? Detta går inte att ångra.</p>
      <button class="modal-btn" onclick="executeClear()" style="text-align: center; background: var(--danger); color: white;">Ja, rensa banskiss</button>
      <button class="modal-btn" onclick="closeClearModal()" style="text-align: center;">Avbryt</button>
  </div>
</div>








<!-- Översta menyraden -->
<div id="topbar">
  <h1>Smedstorps RS – Banritning</h1>
  <button class="help-btn" onclick="openHelpModal()" title="Instruktioner">?</button>
  <button class="danger" onclick="openClearModal()">Rensa banskiss</button>
  <button onclick="openSaveModal()">Spara Fil</button>
  <button onclick="triggerFileLoad()">Öppna Fil</button>
  <input type="file" id="file-input" style="display: none;" accept=".json" onchange="loadFile(event)">
  <button class="primary" onclick="exportPDF()">Exportera PDF</button>
</div>








<div id="main">
  <div id="sidebar">
      <div class="section-title">Inställningar</div>
      <div class="input-group">
          <label>Banamått</label>
          <select id="arena-size" onchange="handleSizeChange()">
              <option value="20x40">20 x 40 m</option>
              <option value="20x60" selected>20 x 60 m</option>
              <option value="custom">Valfritt mått...</option>
          </select>
          <div id="custom-size-container" class="custom-size-inputs" style="display: none;">
              <div class="input-group">
                  <label>Bredd (m)</label>
                  <input type="number" id="custom-width" value="20" min="5" max="200" onchange="handleSizeChange()">
              </div>
              <div class="input-group">
                  <label>Längd (m)</label>
                  <input type="number" id="custom-height" value="60" min="5" max="200" onchange="handleSizeChange()">
              </div>
          </div>
       
          <label style="display: flex; align-items: center; gap: 8px; font-size: 12px; margin-top: 5px;">
              <input type="checkbox" id="show-grid" checked onchange="toggleGridVisibility()">
              Visa rutnät & mått
          </label>








          <div class="zoom-sidebar-container">
              <div>
                  <label style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Zoom</label>
                  <span id="zoom-value" style="font-size: 11px; font-weight: 700; color: var(--primary);">70%</span>
              </div>
              <input type="range" id="zoom-slider" min="0.1" max="1.5" step="0.01" value="0.7" oninput="handleSliderZoom(this.value)" style="width: 100%; cursor: pointer;">
          </div>
      </div>








      <div class="section-title">Banhoppning</div>
      <div class="tool-grid">
          <button class="tool-btn" onclick="addVertical()">Rätuppstående</button>
          <button class="tool-btn" onclick="addOxer()">Oxer</button>
          <button class="tool-btn" onclick="addWaterJump()">Vattenhinder</button>
          <button class="tool-btn" onclick="addBank()">Bank</button>
      </div>








      <div class="section-title">WE-hinder</div>
      <div class="tool-grid">
          <button class="tool-btn" onclick="openPenModal()">Fålla</button>
          <button class="tool-btn" onclick="addBridge()">Träbro</button>
          <button class="tool-btn" onclick="addTable()">Bord</button>
          <button class="tool-btn" onclick="addLanceBarrel()">Lans ur/i tunna</button>
          <button class="tool-btn" onclick="addBull()">Ring</button>
          <button class="tool-btn" onclick="addMoveCup()">Flytta mugg</button>
          <button class="tool-btn" onclick="addGate('rope')">Repgrind</button>
          <button class="tool-btn" onclick="addGate('solid')">Fast grind</button>
          <button class="tool-btn" onclick="openBellModal()">Klocka i korridor</button>
          <button class="tool-btn" onclick="addBackingPattern()">Ryggning i mönster</button>
          <button class="tool-btn" onclick="openSidewaysModal()">Sidvärts</button>
      </div>








      <div class="section-title">Slalom</div>
      <div class="input-group">
          <label>Slalommått (m)</label>
          <select id="slalom-size">
              <option value="6">6 meter</option>
              <option value="7">7 meter</option>
              <option value="8" selected>8 meter</option>
              <option value="10">10 meter</option>
          </select>
      </div>
      <div class="tool-grid">
          <button class="tool-btn" onclick="addSlalom()">Enkelslalom</button>
          <button class="tool-btn" onclick="addParallelSlalom(3)">Parallell 3p</button>
          <button class="tool-btn" onclick="addParallelSlalom(5)">Parallell 5p</button>
          <button class="tool-btn" onclick="addParallelSlalom(7)">Parallell 7p</button>
      </div>








      <div class="section-title">Tunnor</div>
      <div class="input-group">
          <label>Tunnmått (m)</label>
          <select id="barrel-size">
              <option value="6">6 meter</option>
              <option value="8" selected>8 meter</option>
              <option value="10">10 meter</option>
          </select>
      </div>
      <div class="tool-grid">
          <button class="tool-btn" onclick="addOneBarrel()">En tunna</button>
          <button class="tool-btn" onclick="addTwoBarrels()">Två tunnor</button>
          <button class="tool-btn full" onclick="addThreeBarrels()">Tre tunnor</button>
      </div>








      <div class="section-title">Övrigt</div>
      <div class="tool-grid">
          <button class="tool-btn" onclick="addMarker('start')">START</button>
          <button class="tool-btn" onclick="addMarker('mål')">MÅL</button>
          <button class="tool-btn" onclick="openNumModal()">Numrering</button>
          <button class="tool-btn" onclick="openTextModal()">Infoga Text</button>
          <button class="tool-btn" onclick="openMarkerModal()">Hindermarkering</button>
          <button class="tool-btn" onclick="addBlueLine()">Rak linje (blå)</button>
          <button class="tool-btn" onclick="addBlueCircle()">Cirkel (blå)</button>
          <button class="tool-btn" onclick="addDirectionArrow()">Riktningspil</button>
          <button class="tool-btn" onclick="togglePen()" id="pen-btn">✏️ Rita ridväg</button>
      </div>
  </div>








  <div id="canvas-container">
      <div id="canvas-wrapper">
          <canvas id="c"></canvas>
      </div>
      <div id="selection-tools">
          <button onclick="rotateSelection(-15)">↺ Rotera</button>
          <button onclick="rotateSelection(15)">↻ Rotera</button>
          <button onclick="deleteSelection()" style="color:#f87171;">Radera</button>
      </div>
  </div>








  <div id="infobar">
      <button class="toggle-info-btn" onclick="toggleInfobar()" title="Öppna/Stäng Baninformation">ℹ️</button>
      <div class="section-title">Baninformation</div>
      <div class="input-group">
          <label>Titel</label>
          <input type="text" id="course-title" placeholder="Ex: WE LD:1">
      </div>
      <div class="input-group">
          <label>Klass</label>
          <input type="text" id="course-class">
      </div>
      <div class="input-group">
          <label>Banbyggare</label>
          <input type="text" id="course-builder">
      </div>
      <div class="input-group">
          <label>Domare</label>
          <input type="text" id="course-judge">
      </div>
      <div class="input-group">
          <label style="display:flex; justify-content:space-between;">Information <span style="font-size:9px; opacity:0.6;">(Kommer med i PDF)</span></label>
          <textarea id="course-msg" rows="15" placeholder="Skriv instruktioner här..."></textarea>
      </div>
  </div>
</div>








<script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.1/fabric.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>








<script>
  let canvas;
  const GRID_SIZE = 40; // 1 meter = 40px








  window.onload = () => {
      handleSizeChange();
      setupEvents();
      handleSliderZoom(0.7);
  };








  function toggleInfobar() {
      const infobar = document.getElementById('infobar');
      infobar.classList.toggle('collapsed');
  }








  function openHelpModal() { document.getElementById('help-modal-overlay').style.display = 'flex'; }
  function closeHelpModal() { document.getElementById('help-modal-overlay').style.display = 'none'; }








  function openSidewaysModal() { document.getElementById('modal-overlay').style.display = 'flex'; }
  function closeModal() { document.getElementById('modal-overlay').style.display = 'none'; }








  function openBellModal() { document.getElementById('bell-modal-overlay').style.display = 'flex'; }
  function closeBellModal() { document.getElementById('bell-modal-overlay').style.display = 'none'; }








  function openPenModal() { document.getElementById('pen-modal-overlay').style.display = 'flex'; }
  function closePenModal() { document.getElementById('pen-modal-overlay').style.display = 'none'; }








  function openNumModal() {
      document.getElementById('num-modal-overlay').style.display = 'flex';
      document.getElementById('obstacle-number').focus();
  }
  function closeNumModal() { document.getElementById('num-modal-overlay').style.display = 'none'; }




  function openTextModal() {
      document.getElementById('text-modal-overlay').style.display = 'flex';
      document.getElementById('free-text-input').focus();
  }
  function closeTextModal() { document.getElementById('text-modal-overlay').style.display = 'none'; }








  function openMarkerModal() { document.getElementById('marker-modal-overlay').style.display = 'flex'; }
  function closeMarkerModal() { document.getElementById('marker-modal-overlay').style.display = 'none'; }








  function openSaveModal() {
      document.getElementById('save-modal-overlay').style.display = 'flex';
      const defaultTitle = document.getElementById('course-title').value || 'WE_Banritning';
      document.getElementById('save-filename').value = defaultTitle.replace(/\s+/g, '_');
      document.getElementById('save-filename').focus();
  }
  function closeSaveModal() { document.getElementById('save-modal-overlay').style.display = 'none'; }








  function openClearModal() { document.getElementById('clear-modal-overlay').style.display = 'flex'; }
  function closeClearModal() { document.getElementById('clear-modal-overlay').style.display = 'none'; }








  function executeClear() {
      const objects = canvas.getObjects().filter(o => o.data?.type !== 'grid');
      objects.forEach(o => canvas.remove(o));
      canvas.renderAll();
      closeClearModal();
  }








  function executeSave() {
      const filename = document.getElementById('save-filename').value.trim() || 'banritning';
     
      const appData = {
          canvas: canvas.toJSON(['data']),
          metadata: {
              arenaSize: document.getElementById('arena-size').value,
              customWidth: document.getElementById('custom-width').value,
              customHeight: document.getElementById('custom-height').value,
              title: document.getElementById('course-title').value,
              klass: document.getElementById('course-class').value,
              builder: document.getElementById('course-builder').value,
              judge: document.getElementById('course-judge').value,
              msg: document.getElementById('course-msg').value,
              showGrid: document.getElementById('show-grid').checked
          }
      };








      const dataStr = JSON.stringify(appData);
      const blob = new Blob([dataStr], {type: 'application/json'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = filename + '.json';
      a.click();
      closeSaveModal();
  }








  function triggerFileLoad() {
      document.getElementById('file-input').click();
  }








  function loadFile(event) {
      const file = event.target.files[0];
      if (!file) return;








      const reader = new FileReader();
      reader.onload = (e) => {
          try {
              const appData = JSON.parse(e.target.result);
             
              if (appData.metadata) {
                  const m = appData.metadata;
                  document.getElementById('arena-size').value = m.arenaSize || '20x60';
                  document.getElementById('custom-width').value = m.customWidth || '20';
                  document.getElementById('custom-height').value = m.customHeight || '60';
                  document.getElementById('course-title').value = m.title || '';
                  document.getElementById('course-class').value = m.klass || '';
                  document.getElementById('course-builder').value = m.builder || '';
                  document.getElementById('course-judge').value = m.judge || '';
                  document.getElementById('course-msg').value = m.msg || '';
                  document.getElementById('show-grid').checked = m.showGrid !== false;
                 
                  handleSizeChange();
              }








              canvas.loadFromJSON(appData.canvas || appData, () => {
                  drawGrid();
                  canvas.renderAll();
              });








          } catch (err) {
              console.error("Kunde inte ladda filen:", err);
          }
      };
      reader.readAsText(file);
      event.target.value = '';
  }








  function addObstacleNumber() {
      const val = document.getElementById('obstacle-number').value.trim();
      if (!val) return;
     
      const circle = new fabric.Circle({
          radius: 14, fill: '#fff', stroke: '#334155', strokeWidth: 2, originX: 'center', originY: 'center'
      });
      const text = new fabric.Text(val, {
          fontSize: 14, fontWeight: 'bold', fill: '#334155', originX: 'center', originY: 'center', fontFamily: 'DM Sans'
      });
     
      drop(new fabric.Group([circle, text], { originX: 'center', originY: 'center' }));
      document.getElementById('obstacle-number').value = '';
      closeNumModal();
  }




  function addFreeText() {
      const val = document.getElementById('free-text-input').value.trim();
      if (!val) return;
     
      const text = new fabric.Text(val, {
          fontSize: 18, fontWeight: 'bold', fill: '#334155', originX: 'center', originY: 'center', fontFamily: 'DM Sans'
      });
     
      drop(text);
      document.getElementById('free-text-input').value = '';
      closeTextModal();
  }








  function createObstacleMarkers(distanceMeters) {
      const size = 0.3 * GRID_SIZE;
      const spacing = distanceMeters * GRID_SIZE;
     
      const whiteRect = new fabric.Rect({
          width: size, height: size, fill: '#ffffff', stroke: '#334155', strokeWidth: 1,
          left: -spacing/2, originX: 'center', originY: 'center'
      });
     
      const redRect = new fabric.Rect({
          width: size, height: size, fill: '#ef4444', stroke: '#991b1b', strokeWidth: 1,
          left: spacing/2, originX: 'center', originY: 'center'
      });
     
      drop(new fabric.Group([whiteRect, redRect], {
          originX: 'center',
          originY: 'center',
          lockScalingX: true,
          lockScalingY: true
      }));
      closeMarkerModal();
  }








  function addBlueLine() {
      const line = new fabric.Rect({
          width: 120,
          height: 4,
          fill: '#2563eb',
          stroke: '#2563eb',
          strokeWidth: 0,
          originX: 'center',
          originY: 'center',
          lockScalingFlip: true,
          hasControls: true,
          transparentCorners: false,
          cornerSize: 8
      });
      line.setControlsVisibility({
          mt: false, mb: false, ml: true, mr: true, tl: false, tr: false, bl: false, br: false
      });
      drop(line);
  }








  function addBlueCircle() {
      const circle = new fabric.Circle({
          radius: 40,
          fill: 'transparent',
          stroke: '#2563eb',
          strokeWidth: 3,
          strokeUniform: true,
          originX: 'center',
          originY: 'center'
      });
      drop(circle);
  }








  function addDirectionArrow() {
      const arrowLen = GRID_SIZE;
      const headLen = 12;
     
      const line = new fabric.Rect({
          width: arrowLen,
          height: 4,
          fill: '#dc2626',
          originX: 'left',
          originY: 'center'
      });
     
      const head = new fabric.Triangle({
          width: 15,
          height: headLen,
          fill: '#dc2626',
          left: arrowLen,
          top: 0,
          angle: 90,
          originX: 'center',
          originY: 'center'
      });
     
      const arrowGroup = new fabric.Group([line, head], {
          originX: 'center',
          originY: 'center',
          lockScalingX: true,
          lockScalingY: true
      });
     
      drop(arrowGroup);
  }








  function toggleGridVisibility() {
      drawGrid();
      canvas.renderAll();
  }








  function drawGrid() {
      const w = canvas.width, h = canvas.height;
      const showGrid = document.getElementById('show-grid').checked;
      canvas.getObjects().filter(o => o.data?.type === 'grid').forEach(o => canvas.remove(o));
      if (!showGrid) return;








      const tenMeterColor = '#000000';
      const fiveMeterColor = '#475569';
      const normalMeterColor = '#cbd5e1';








      for (let i = 0; i <= (w / GRID_SIZE); i++) {
          const isTen = i % 10 === 0;
          const isFive = i % 5 === 0;
         
          let strokeColor = normalMeterColor;
          let sWidth = 1;
         
          if (isTen) { strokeColor = tenMeterColor; sWidth = 3; }
          else if (isFive) { strokeColor = fiveMeterColor; sWidth = 2; }








          canvas.add(new fabric.Line([i*GRID_SIZE, 0, i*GRID_SIZE, h], {
              stroke: strokeColor,
              strokeWidth: sWidth,
              selectable: false, evented: false, data: { type: 'grid' }
          }));
         
          if (isTen && i > 0 && i*GRID_SIZE < w) {
              canvas.add(new fabric.Text(`${i}m`, {
                  left: i*GRID_SIZE + 5,
                  top: 5,
                  fontSize: 16,
                  fontWeight: '900',
                  fill: '#000000',
                  selectable: false,
                  evented: false,
                  data: { type: 'grid' }
              }));
          }
      }
      for (let i = 0; i <= (h / GRID_SIZE); i++) {
          const isTen = i % 10 === 0;
          const isFive = i % 5 === 0;








          let strokeColor = normalMeterColor;
          let sWidth = 1;
         
          if (isTen) { strokeColor = tenMeterColor; sWidth = 3; }
          else if (isFive) { strokeColor = fiveMeterColor; sWidth = 2; }








          canvas.add(new fabric.Line([0, i*GRID_SIZE, w, i*GRID_SIZE], {
              stroke: strokeColor,
              strokeWidth: sWidth,
              selectable: false, evented: false, data: { type: 'grid' }
          }));
         
          if (isTen && i > 0 && i*GRID_SIZE < h) {
              canvas.add(new fabric.Text(`${i}m`, {
                  left: 5,
                  top: i*GRID_SIZE + 5,
                  fontSize: 16,
                  fontWeight: '900',
                  fill: '#000000',
                  selectable: false,
                  evented: false,
                  data: { type: 'grid' }
              }));
          }
      }
      canvas.getObjects().filter(o => o.data?.type === 'grid').forEach(o => o.sendToBack());
  }








  function handleSizeChange() {
      const select = document.getElementById('arena-size');
      let width, height;
      if (select.value === 'custom') {
          document.getElementById('custom-size-container').style.display = 'grid';
          width = parseInt(document.getElementById('custom-width').value) || 20;
          height = parseInt(document.getElementById('custom-height').value) || 60;
      } else {
          document.getElementById('custom-size-container').style.display = 'none';
          [width, height] = select.value.split('x').map(Number);
      }
      const canvasW = width * GRID_SIZE, canvasH = height * GRID_SIZE;
      if (!canvas) {
          canvas = new fabric.Canvas('c', { width: canvasW, height: canvasH, backgroundColor: '#ffffff' });
      } else {
          const objects = canvas.getObjects().filter(o => o.data?.type !== 'grid');
          canvas.clear();
          canvas.setDimensions({ width: canvasW, height: canvasH });
          canvas.add(...objects);
      }
      drawGrid();
      const wrapper = document.getElementById('canvas-wrapper');
      wrapper.style.width = canvasW + 'px'; wrapper.style.height = canvasH + 'px';
  }








  function drop(obj) { canvas.add(obj); canvas.centerObject(obj); canvas.setActiveObject(obj); canvas.renderAll(); }








  function createPole(lengthMeters, stripeColor = '#ef4444', baseColor = '#ffffff') {
      const w = lengthMeters * GRID_SIZE;
      const h = 8;
      const base = new fabric.Rect({ width: w, height: h, fill: baseColor, stroke: '#ccc', strokeWidth: 0.8, rx: 2, ry: 2, originX: 'center', originY: 'center' });
      const stripes = [];
      const numStripes = 5;
      const stripeWidth = w / numStripes;
      for(let i=0; i < numStripes; i++) {
          if (i % 2 === 0) {
              stripes.push(new fabric.Rect({
                  width: stripeWidth,
                  height: h,
                  fill: stripeColor,
                  left: -w/2 + (i * stripeWidth),
                  top: -h/2,
                  originX: 'left',
                  originY: 'top',
                  stroke: '#333',
                  strokeWidth: 0.2
              }));
          }
      }
      return new fabric.Group([base, ...stripes], { originX: 'center', originY: 'center' });
  }








  function createWhitePole(lengthMeters) {
      const w = lengthMeters * GRID_SIZE;
      const h = 8;
      return new fabric.Rect({
          width: w, height: h, fill: '#ffffff', stroke: '#333', strokeWidth: 1, rx: 2, ry: 2, originX: 'center', originY: 'center'
      });
  }








  function createStand(x, y, h = 22) {
      return new fabric.Rect({
          width: 10, height: h, fill: '#f8fafc', stroke: '#94a3b8', strokeWidth: 1.5,
          left: x, top: y, originX: 'center', originY: 'center', rx: 2
      });
  }








  function addVertical() {
      const poleLenMeters = 3.5;
      const poleWidthPx = poleLenMeters * GRID_SIZE;
      const pole = createPole(poleLenMeters, '#ef4444');
      const s1 = createStand(-(poleWidthPx / 2), 0, 22);
      const s2 = createStand((poleWidthPx / 2), 0, 22);
      drop(new fabric.Group([s1, s2, pole], { originX: 'center', originY: 'center' }));
  }








  function addOxer() {
      const poleLenMeters = 3.5;
      const poleWidthPx = poleLenMeters * GRID_SIZE;
      const depth = 25;
      const poleFront = createPole(poleLenMeters, '#22c55e');
      const poleBack = createPole(poleLenMeters, '#22c55e');
      poleFront.set({ top: -depth/2 });
      poleBack.set({ top: depth/2 });
      const s1 = createStand(-(poleWidthPx / 2), 0, 45);
      const s2 = createStand((poleWidthPx / 2), 0, 45);
      drop(new fabric.Group([s1, s2, poleFront, poleBack], { originX: 'center', originY: 'center' }));
  }








  function addSideways(variant) {
      let group;
      const poleLen = 4;
      switch(variant) {
          case 1:
              const p1 = createPole(poleLen, '#8d6e63');
              const p2 = createPole(poleLen, '#8d6e63');
              p2.set({ top: 2.5 * GRID_SIZE });
              group = new fabric.Group([p1, p2]);
              break;
          case 2:
              group = createPole(poleLen, '#8d6e63');
              break;
          case 3:
              const p3 = createPole(poleLen, '#8d6e63');
              const p4 = createPole(poleLen, '#8d6e63');
              const offset = (poleLen + 2) * GRID_SIZE;
              p4.set({ left: offset });
              group = new fabric.Group([p3, p4]);
              break;
          case 4:
              const p5 = createPole(poleLen, '#8d6e63');
              const p6 = createPole(poleLen, '#8d6e63');
              p6.set({ angle: 90 });
              const boxSize = poleLen * GRID_SIZE;
              p5.set({ left: 0, top: -boxSize/2 });
              p6.set({ left: boxSize/2, top: 0 });
              group = new fabric.Group([p5, p6]);
              break;
      }
      if(group) { drop(group); closeModal(); }
  }








  function addBellOption(variant) {
      if (variant === 1) addBellCorridor();
      else if (variant === 2) addLBellCorridor();
      closeBellModal();
  }








  function addPenWithSize(sizeMeters) {
      const outerR = (sizeMeters * GRID_SIZE) / 2;
      const innerR = outerR - (2 * GRID_SIZE);
      const gapWidth = 3 * GRID_SIZE;
      const halfGap = gapWidth / 2;
      const safeInnerR = Math.max(5, innerR);
      const startAngle = Math.asin(halfGap / outerR);
      const xStart = -halfGap;
      const yStart = outerR * Math.cos(startAngle);
      const xEnd = halfGap;
      const yEnd = outerR * Math.cos(startAngle);








      const pathData = `M ${xStart} ${yStart} A ${outerR} ${outerR} 0 1 1 ${xEnd} ${yEnd}`;
      const outerPath = new fabric.Path(pathData, {
          fill: 'transparent', stroke: '#334155', strokeWidth: 4, strokeLineCap: 'round', originX: 'center', originY: 'center'
      });
      const innerCircle = new fabric.Circle({
          radius: safeInnerR, fill: 'transparent', stroke: '#334155', strokeWidth: 4, originX: 'center', originY: 'center'
      });








      drop(new fabric.Group([innerCircle, outerPath], { originX: 'center', originY: 'center' }));
      closePenModal();
  }








  function addWaterJump() {
      const w = 6 * GRID_SIZE, h = 4 * GRID_SIZE;
      const water = new fabric.Rect({ width: w, height: h, fill: '#93c5fd', stroke: '#2563eb', strokeWidth: 2, originX: 'center', originY: 'center' });
      const wave = new fabric.Path('M 0 0 Q 10 -10 20 0 Q 30 10 40 0', { fill: 'transparent', stroke: '#60a5fa', strokeWidth: 2, originX: 'center', originY: 'center', left: -20 });
      drop(new fabric.Group([water, wave], { originX: 'center', originY: 'center' }));
  }








  function addBank() {
      const w = 6 * GRID_SIZE, h = 4 * GRID_SIZE;
      const base = new fabric.Rect({ width: w, height: h, fill: '#d1d5db', stroke: '#9ca3af', strokeWidth: 2, originX: 'center', originY: 'center' });
      const topPlateau = new fabric.Rect({ width: w * 0.7, height: h * 0.7, fill: '#f3f4f6', stroke: '#9ca3af', strokeWidth: 1, originX: 'center', originY: 'center' });
      const l1 = new fabric.Line([-w/2, -h/2, -w*0.35, -h*0.35], { stroke: '#9ca3af', strokeWidth: 1 });
      const l2 = new fabric.Line([w/2, -h/2, w*0.35, -h*0.35], { stroke: '#9ca3af', strokeWidth: 1 });
      const l3 = new fabric.Line([-w/2, h/2, -w*0.35, h*0.35], { stroke: '#9ca3af', strokeWidth: 1 });
      const l4 = new fabric.Line([w/2, h/2, w*0.35, h*0.35], { stroke: '#9ca3af', strokeWidth: 1 });
      drop(new fabric.Group([base, topPlateau, l1, l2, l3, l4], { originX: 'center', originY: 'center' }));
  }








  function addBellCorridor() {
      const poleLen = 4 * GRID_SIZE;
      const gap = 1.5 * GRID_SIZE;
      const pole1 = createWhitePole(4);
      pole1.set({ top: -gap/2 });
      const pole2 = createWhitePole(4);
      pole2.set({ top: gap/2 });
      const bellStand = new fabric.Rect({ width: 4, height: 40, fill: '#334155', left: poleLen/2 + 5, top: 0, originX: 'center', originY: 'center' });
      const bell = new fabric.Circle({ radius: 8, fill: '#fbbf24', stroke: '#b45309', strokeWidth: 2, left: poleLen/2 + 5, top: 0, originX: 'center', originY: 'center' });
      drop(new fabric.Group([pole1, pole2, bellStand, bell], { originX: 'center', originY: 'center' }));
  }








  function addLBellCorridor() {
      const outerLen = 4 * GRID_SIZE;
      const gap = 1.5 * GRID_SIZE;
      const innerLen = outerLen - gap;
      const outer1 = createWhitePole(4);
      outer1.set({ left: 0, top: -gap, originX: 'left' });
      const outer2 = createWhitePole(4);
      outer2.set({ left: 0, top: -gap, angle: 90, originX: 'left' });
      const inner1 = createWhitePole(innerLen / GRID_SIZE);
      inner1.set({ left: gap, top: 0, originX: 'left' });
      const inner2 = createWhitePole(innerLen / GRID_SIZE);
      inner2.set({ left: gap, top: 0, angle: 90, originX: 'left' });
      const bellStand = new fabric.Rect({ width: 4, height: 30, fill: '#334155', left: outerLen + 10, top: -gap/2, originX: 'center', originY: 'center' });
      const bell = new fabric.Circle({ radius: 7, fill: '#fbbf24', stroke: '#b45309', strokeWidth: 2, left: outerLen + 10, top: -gap/2, originX: 'center', originY: 'center' });
      drop(new fabric.Group([outer1, outer2, inner1, inner2, bellStand, bell], { originX: 'center', originY: 'center' }));
  }








  function createMarkerGraphic(x, y) {
      const foot = new fabric.Circle({ radius: 8, fill: '#475569', originX: 'center', originY: 'center' });
      const pole = new fabric.Circle({ radius: 3, fill: '#f1f5f9', stroke: '#1e293b', strokeWidth: 1, originX: 'center', originY: 'center' });
      return new fabric.Group([foot, pole], { left: x, top: y, originX: 'center', originY: 'center' });
  }








  function addBackingPattern() {
      const stepDist = 3 * GRID_SIZE;
      const corridorWidth = 1.5 * GRID_SIZE;
      const items = [];
      for (let i = 0; i < 3; i++) {
          items.push(createMarkerGraphic(-corridorWidth / 2, i * stepDist - stepDist));
          items.push(createMarkerGraphic(corridorWidth / 2, i * stepDist - stepDist));
      }
      drop(new fabric.Group(items, { originX: 'center', originY: 'center' }));
  }








  function addBridge() {
      const w = 4 * GRID_SIZE;
      const h = 1.5 * GRID_SIZE;
      const plankCount = 12;
      const plankWidth = w / plankCount;
      const bridgeItems = [];
      bridgeItems.push(new fabric.Rect({ width: w + 4, height: h + 4, fill: '#4e342e', originX: 'center', originY: 'center', rx: 2 }));
      for(let i=0; i < plankCount; i++) {
          bridgeItems.push(new fabric.Rect({ width: plankWidth - 2, height: h, fill: i % 2 === 0 ? '#a1887f' : '#8d6e63', stroke: '#5d4037', strokeWidth: 0.5, left: -w/2 + (i * plankWidth) + plankWidth/2, top: 0, originX: 'center', originY: 'center' }));
          bridgeItems.push(new fabric.Circle({ radius: 1, fill: '#3e2723', left: -w/2 + (i * plankWidth) + plankWidth/2, top: -h/2 + 5, originX: 'center' }));
          bridgeItems.push(new fabric.Circle({ radius: 1, fill: '#3e2723', left: -w/2 + (i * plankWidth) + plankWidth/2, top: h/2 - 5, originX: 'center' }));
      }
      bridgeItems.push(new fabric.Rect({ width: w, height: 4, fill: '#5d4037', top: -h/2, originX: 'center', originY: 'center' }));
      bridgeItems.push(new fabric.Rect({ width: w, height: 4, fill: '#5d4037', top: h/2, originX: 'center', originY: 'center' }));
      drop(new fabric.Group(bridgeItems, { originX: 'center', originY: 'center' }));
  }








  function addTable() {
      const tableTop = new fabric.Circle({ radius: 30, fill: '#a6bede', stroke: '#738197', strokeWidth: 3, originX: 'center', originY: 'center' });
      const jugBody = new fabric.Circle({ radius: 12, fill: '#835672', stroke: '#334155', strokeWidth: 2, originX: 'center', originY: 'center' });
      const handle = new fabric.Path('M 12 -4 Q 20 0 12 4', { fill: 'transparent', stroke: '#334155', strokeWidth: 2, left: 10, originY: 'center' });
      const spout = new fabric.Triangle({ width: 5, height: 12, fill: '#835672', stroke: '#334155', strokeWidth: 2, angle: -90, left: -18, top: 0, originX: 'center', originY: 'center' });
      drop(new fabric.Group([tableTop, jugBody, handle, spout], { originX: 'center', originY: 'center' }));
  }








  function addSlalom() {
      const distVal = parseInt(document.getElementById('slalom-size').value);
      const dist = distVal * GRID_SIZE;
      const numPoles = 5;
      const items = [];
      const offset = 0.75 * GRID_SIZE;
      let pathStr = `M 0 ${-dist/2} `;
      for (let i = 0; i < numPoles; i++) {
          items.push(new fabric.Circle({ radius: 8, fill: '#000', left: 0, top: i * dist, originX: 'center', originY: 'center' }));
          const currentY = i * dist;
          const nextMidY = currentY + dist / 2;
          const side = (i % 2 === 0) ? 1 : -1;
          pathStr += `Q ${side * offset * 2.5} ${currentY}, 0 ${nextMidY} `;
      }
      pathStr += `L 0 ${(numPoles - 1) * dist + dist/2}`;
      const ridingPath = new fabric.Path(pathStr, { fill: 'transparent', stroke: '#c2410c', strokeWidth: 2, strokeDashArray: [5, 5], selectable: false, evented: false });
      items.unshift(ridingPath);
      drop(new fabric.Group(items));
  }








  function addParallelSlalom(count) {
      const distVal = parseInt(document.getElementById('slalom-size').value);
      const d = distVal * GRID_SIZE;
      const items = [];
      const gapX = d;
      let radiusMeters = 1.75;
      if (distVal === 6) radiusMeters = 1.5;
      else if (distVal === 8) radiusMeters = 2.0;
      else if (distVal === 10) radiusMeters = 2.5;
      const radius = radiusMeters * GRID_SIZE;
      const poles = [];
      const leftCount = Math.ceil(count / 2), rightCount = Math.floor(count / 2);
      for(let i=0; i < leftCount; i++) poles.push({ x: 0, y: i * d });
      for(let i=0; i < rightCount; i++) poles.push({ x: gapX, y: i * d + d/2 });
      poles.sort((a,b) => a.y - b.y);
      const firstP = poles[0];
      const firstSide = (firstP.x === 0) ? -1 : 1;
      let pathStr = `M ${firstP.x + (firstSide * radius)} ${firstP.y} `;
      for (let i = 0; i < poles.length; i++) {
          const p = poles[i];
          const side = (p.x === 0) ? -1 : 1;
          if (i === 0) {
              const exitY = p.y + radius;
              const exitX = p.x;
              const peakX = p.x + (side * radius);
              pathStr += `Q ${peakX} ${exitY}, ${exitX} ${exitY} `;
          } else if (i === poles.length - 1) {
              const entryY = p.y - radius;
              const entryX = p.x;
              const peakX = p.x + (side * radius);
              pathStr += `L ${entryX} ${entryY} Q ${peakX} ${entryY}, ${peakX} ${p.y} `;
          } else {
              const entryY = p.y - radius;
              const entryX = p.x;
              const peakX = p.x + (side * radius);
              const exitY = p.y + radius;
              const exitX = p.x;
              pathStr += `L ${entryX} ${entryY} Q ${peakX} ${entryY}, ${peakX} ${p.y} Q ${peakX} ${exitY}, ${exitX} ${exitY} `;
          }
      }
      const ridingPath = new fabric.Path(pathStr, { fill: 'transparent', stroke: '#c2410c', strokeWidth: 2, strokeDashArray: [5, 5], selectable: false, evented: false });
      items.push(ridingPath);
      poles.forEach(p => items.push(new fabric.Circle({ radius: 8, fill: '#000', left: p.x, top: p.y, originX: 'center', originY: 'center' })));
      drop(new fabric.Group(items));
  }








  function createBarrelGraphic(x = 0, y = 0) {
      const radius = 16;
      const body = new fabric.Circle({ radius: radius, fill: '#8d6e63', stroke: '#5d4037', strokeWidth: 2, originX: 'center', originY: 'center' });
      const top = new fabric.Circle({ radius: radius * 0.8, fill: '#6d4c41', originX: 'center', originY: 'center' });
      return new fabric.Group([body, top], { left: x, top: y, originX: 'center', originY: 'center' });
  }








  function addOneBarrel() {
      const r = (parseInt(document.getElementById('barrel-size').value)*GRID_SIZE)/2;
      const radiusCircle = new fabric.Circle({ radius: r, fill: 'transparent', stroke: '#94a3b8', strokeDashArray:[5,5], originX: 'center', originY: 'center' });
      const barrel = createBarrelGraphic();
      drop(new fabric.Group([radiusCircle, barrel]));
  }
 
  function addTwoBarrels() {
      const dVal = parseInt(document.getElementById('barrel-size').value);
      const circleRadius = (dVal * GRID_SIZE) / 2;
      const circleSpacing = dVal * GRID_SIZE;
      const barrelSpacing = 3.6 * GRID_SIZE;
     
      const items = [
          new fabric.Circle({ radius: circleRadius, fill: 'transparent', stroke: '#94a3b8', strokeDashArray:[5,5], top: -circleSpacing/2, originX: 'center', originY: 'center' }),
          new fabric.Circle({ radius: circleRadius, fill: 'transparent', stroke: '#94a3b8', strokeDashArray:[5,5], top: circleSpacing/2, originX: 'center', originY: 'center' }),
          createBarrelGraphic(0, -barrelSpacing/2),
          createBarrelGraphic(0, barrelSpacing/2)
      ];
      drop(new fabric.Group(items));
  }








  function addThreeBarrels() {
      const dVal = parseInt(document.getElementById('barrel-size').value);
      const circleRadius = (dVal * GRID_SIZE) / 2;
      const circleSideLength = dVal * GRID_SIZE;
      const barrelSideLength = 3.6 * GRID_SIZE;
      const hCircles = circleSideLength * Math.sin(Math.PI / 3);
      const hBarrels = barrelSideLength * Math.sin(Math.PI / 3);
     
      const items = [];
      [{ x: 0, y: -hCircles * 2/3 }, { x: -circleSideLength/2, y: hCircles/3 }, { x: circleSideLength/2, y: hCircles/3 }].forEach(p => {
          items.push(new fabric.Circle({ radius: circleRadius, fill: 'transparent', stroke: '#94a3b8', strokeDashArray:[5,5], left: p.x, top: p.y, originX: 'center', originY: 'center' }));
      });
      [{ x: 0, y: -hBarrels * 2/3 }, { x: -barrelSideLength/2, y: hBarrels/3 }, { x: barrelSideLength/2, y: hBarrels/3 }].forEach(p => {
          items.push(createBarrelGraphic(p.x, p.y));
      });
      drop(new fabric.Group(items));
  }








  function addLanceBarrel() {
      const barrel = createBarrelGraphic();
      const lanceLength = 55;
      const lance = new fabric.Rect({ width: lanceLength, height: 3, fill: '#94a3b8', stroke: '#475569', strokeWidth: 0.5, left: 0, top: 0, angle: -60, originX: 'left', originY: 'center' });
      const tip = new fabric.Rect({ width: 4, height: 4, fill: '#94a3b8', stroke: '#475569', strokeWidth: 0.5, left: Math.cos((-60 * Math.PI) / 180) * lanceLength, top: Math.sin((-60 * Math.PI) / 180) * lanceLength, angle: -60, originX: 'center', originY: 'center' });
      const guard = new fabric.Circle({ radius: 5, fill: '#475569', left: 10, top: 0, originX: 'center', originY: 'center' });
      drop(new fabric.Group([barrel, lance, tip, guard], { originX: 'center', originY: 'center' }));
  }








  function addBull() {
      const bullBody = new fabric.Ellipse({ rx: 20, ry: 12, fill: '#334155', originX: 'center', originY: 'center' });
      const ring = new fabric.Circle({ radius: 8, fill: 'transparent', stroke: '#fbbf24', strokeWidth: 3, originX: 'center', originY: 'center' });
      drop(new fabric.Group([bullBody, ring], { originX: 'center', originY: 'center' }));
  }








  function addMoveCup() {
      const p1 = createMarkerGraphic(0, -30), p2 = createMarkerGraphic(0, 30);
      const cup = new fabric.Rect({ width: 12, height: 16, fill: '#dc2626', stroke: '#991b1b', strokeWidth: 1, left: 0, top: -30, originX: 'center', originY: 'bottom' });
      drop(new fabric.Group([p1, p2, cup], { originX: 'center', originY: 'center' }));
  }








  function addGate(t) {
      const gateItems = [];
      const poleDist = 80;
      if (t === 'rope') {
          const sag = 15;
          const pathData = `M -40 0 Q 0 ${sag} 40 0`;
          gateItems.push(new fabric.Path(pathData, { fill: 'transparent', stroke: '#e2d6b5', strokeWidth: 5, strokeLineCap: 'round', originX: 'center', originY: 'center' }));
          gateItems.push(new fabric.Path(pathData, { fill: 'transparent', stroke: '#bca67e', strokeWidth: 4, strokeDashArray: [6, 4], strokeLineCap: 'round', originX: 'center', originY: 'center' }));
      } else {
          gateItems.push(new fabric.Rect({ width: poleDist, height: 8, fill: '#5d4037', stroke: '#3e2723', strokeWidth: 1, originX: 'center', originY: 'center' }));
      }
      gateItems.push(new fabric.Circle({ radius: 9, fill:'#4e342e', left:-40, originX:'center', originY: 'center', stroke: '#2e1d1a', strokeWidth: 1.5 }));
      gateItems.push(new fabric.Circle({ radius: 9, fill:'#4e342e', left:40, originX:'center', originY: 'center', stroke: '#2e1d1a', strokeWidth: 1.5 }));
      gateItems.push(new fabric.Circle({ radius: 4, fill:'#6d4c41', left:-40, originX:'center', originY: 'center' }));
      gateItems.push(new fabric.Circle({ radius: 4, fill:'#6d4c41', left:40, originX:'center', originY: 'center' }));
      drop(new fabric.Group(gateItems, { originX: 'center', originY: 'center' }));
  }
 
  function addMarker(t) { drop(new fabric.Group([new fabric.Rect({ width: 60, height: 25, fill: t==='start'?'#16a34a':'#dc2626', rx: 4, originX: 'center' }), new fabric.Text(t.toUpperCase(), { fontSize: 11, fill: '#fff', fontWeight: 'bold', originX: 'center', top: 5 })])); }








  function togglePen() {
      canvas.isDrawingMode = !canvas.isDrawingMode;
      if(canvas.isDrawingMode) {
          canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
          canvas.freeDrawingBrush.width = 3; canvas.freeDrawingBrush.color = '#c2410c';
          canvas.freeDrawingBrush.strokeDashArray = [8, 8];
          document.getElementById('pen-btn').classList.add('active');
      } else document.getElementById('pen-btn').classList.remove('active');
  }








  function rotateSelection(deg) { const obj = canvas.getActiveObject(); if(obj) { obj.rotate((obj.angle || 0) + deg); canvas.renderAll(); } }
  function deleteSelection() { canvas.getActiveObjects().forEach(o => { if(o.data?.type !== 'grid') canvas.remove(o); }); canvas.discardActiveSelection().renderAll(); }
 
  function setupEvents() {
      canvas.on('selection:created', () => document.getElementById('selection-tools').style.display = 'flex');
      canvas.on('selection:cleared', () => document.getElementById('selection-tools').style.display = 'none');
      window.addEventListener('keydown', (e) => {
          if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) return;
          if (['Delete', 'Backspace'].includes(e.key)) deleteSelection();
      });
  }








  function handleSliderZoom(val) {
      const z = parseFloat(val);
      document.getElementById('canvas-wrapper').style.transform = `scale(${z})`;
      document.getElementById('zoom-value').innerText = Math.round(z * 100) + '%';
  }








  async function exportPDF() {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF('p', 'pt', 'a4');
      const pageWidth = doc.internal.pageSize.getWidth(), pageHeight = doc.internal.pageSize.getHeight(), margin = 40;
      const title = document.getElementById('course-title').value || 'BANRITNING', klass = document.getElementById('course-class').value || '-';
      const builder = document.getElementById('course-builder').value || '-', judge = document.getElementById('course-judge').value || '-';
      let dims = document.getElementById('arena-size').value === 'custom' ? `${document.getElementById('custom-width').value} x ${document.getElementById('custom-height').value} m` : document.getElementById('arena-size').value.replace('x', ' x ') + " m";








      doc.setFont('helvetica', 'bold').setFontSize(22).text(title.toUpperCase(), margin, 60);
      doc.setFontSize(10).setFont('helvetica', 'normal').text(`KLASS: ${klass}`, margin, 85).text(`BANBYGGARE: ${builder}`, margin + 180, 85).text(`DOMARE: ${judge}`, margin + 360, 85);
      doc.setLineWidth(1).line(margin, 95, pageWidth - margin, 95);








      const contentTop = 115, leftColWidth = (pageWidth - (margin * 2)) * 0.65, rightColStart = margin + leftColWidth + 20, rightColWidth = (pageWidth - margin) - rightColStart;
      const dataUrl = canvas.toDataURL({ format: 'png', multiplier: 2 });
      const img = new Image(); img.src = dataUrl; await new Promise(r => img.onload = r);
      let renderW = leftColWidth, renderH = renderW / (canvas.width / canvas.height);
      if (renderH > pageHeight - contentTop - margin - 30) { renderH = pageHeight - contentTop - margin - 30; renderW = renderH * (canvas.width / canvas.height); }








      doc.setFont('helvetica', 'bold').setFontSize(11).text(`BANANS MÅTT: ${dims}`, margin, contentTop + 15);
      const tc = document.createElement('canvas'); tc.width = canvas.width; tc.height = canvas.height;
      const tctx = tc.getContext('2d'); tctx.fillStyle = '#ffffff'; tctx.fillRect(0, 0, tc.width, tc.height); tctx.drawImage(img, 0, 0);
      tctx.strokeStyle = '#000000'; tctx.lineWidth = 10; tctx.strokeRect(0, 0, tc.width, tc.height);
      doc.addImage(tc.toDataURL('image/png'), 'PNG', margin, contentTop + 25, renderW, renderH);








      const infoText = document.getElementById('course-msg').value;
      if (infoText) {
          doc.setFont('helvetica', 'bold').setFontSize(11).text("INFORMATION", rightColStart, contentTop + 15).line(rightColStart, contentTop + 20, rightColStart + 80, contentTop + 20);
          doc.setFont('helvetica', 'normal').setFontSize(10).text(doc.splitTextToSize(infoText, rightColWidth), rightColStart, contentTop + 35);
      }
      doc.save(`${title.replace(/\s+/g, '_')}_Banritning.pdf`);
  }
</script>
</body>
</html>
