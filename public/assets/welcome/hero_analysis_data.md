{
  "project_metadata": {
    "diagram_theme": "Deep Sea / Glassmorphism",
    "language": "Traditional Chinese (zh-Hant) / English",
    "workflow_type": "GitOps / ChatOps Asynchronous Pipeline",
    "layout_adjustments": {
      "bottom_panel_alignment": "left_side_weighted",
      "safe_zone": "bottom_right_corner (Reserved for Gemini Icon)",
      "horizontal_offset": "Shift left by reducing right margin",
      "panel_width_percentage": "85%"
    }
  },
  "visual_theme_definition": {
    "background": {
      "environment": "Deep-sea bioluminescent abyss",
      "elements": [
        "Underwater reef structures (corals, plants)",
        "Floating data particles and bubbles",
        "Dynamic blue light rays filtering from above"
      ],
      "color_palette": {
        "primary_background": "#02080f",
        "interactive_nodes": "#00ffd5",
        "internal_logic": "#a855f7",
        "warning_or_inactive": "#ff8a3d",
        "text_title": "#f6fbff",
        "text_standard": "#d1dbe5"
      }
    },
    "design_language": {
      "containers": "Frosted glass panels with glowing cyan borders",
      "connectors": {
        "external_cyan": "External input and final output",
        "internal_purple": "Pipeline internal routing and data artifacts"
      },
      "icons": "Skeuomorphic 3D-effect bubbles and tech-themed illustrative icons"
    }
  },
  "component_breakdown": {
    "header_title": {
      "main_title": "深海龍蝦大腦與小龍蝦工坊: GitOps/ChatOps 工作流",
      "sub_title_en": "(AI Lobster Intelligence & Lobster Workflow: GitOps/ChatOps)",
      "typo_note": "'Lobste' in the English sub-title is preserved as a typo in the original image."
    },
    "workflow_stages": [
      {
        "stage": "Input Phase",
        "components": [
          {
            "id": "gateway_user_input",
            "sequence": 1,
            "type": "User Input Gateway",
            "label": "使用者 (User Interface)",
            "description": "透過通訊軟體發送指令 (Command Sending)",
            "flow_out": ["gateway_webhook"],
            "icons": [
              {"name": "Smartphone", "visual_style": "Blue gradient, glowing"},
              {"name": "Telegram Logo", "visual_style": "Flat circular icon"},
              {"name": "LINE Logo", "visual_style": "Rounded square, green"}
            ]
          },
          {
            "id": "gateway_webhook",
            "sequence": 2,
            "type": "External Input Gateway",
            "label": "外部 Webhook (External Webhook Gateway)",
            "description": "接收指令 (Receive Command)",
            "flow_out": ["core_auth_app"],
            "visual_metaphor": {
              "base": "Server rack stack with light indicators",
              "header": "Frosted glass panel with cyan glowing edge"
            }
          }
        ]
      },
      {
        "stage": "Processing & Registration Phase",
        "boundary_label": "GitHub 海域 (GitHub Ocean) - 核心控制區",
        "slogan": ["免費 (Free)", "24小時營業 (24/7)", "可追溯 (Traceable)"],
        "components": [
          {
            "id": "core_auth_app",
            "sequence": 3,
            "type": "Identity Core",
            "label": " 核心 GitHub App: 安全與身分核心",
            "icon": {
              "name": "Orb Seal",
              "description": "A stylized robotic seal/otter inside a glowing spherical capsule with gears"
            },
            "bullet_points": [
              "機密管理與 TOKEN 產生器",
              "精細權限控制",
              "身分識別"
            ],
            "flow_out": ["ai_brain_routing"]
          },
          {
            "id": "ai_brain_routing",
            "sequence": 4,
            "type": "Decision Core",
            "label": "A. 大腦 (Brain) AI 決策路由",
            "icon": {
              "name": "Tech Lobster",
              "description": "Detailed metallic lobster with circuitry and glowing fractal-brain head"
            },
            "bullet_points": [
              "分析指令，決定執行哪個 Tool"
            ],
            "connections": [
              {"label": "機密管理", "type": "Purple connection", "context": "[App名稱] Secrets"},
              {"label": "身分管理", "type": "Purple connection", "context": "[App名稱] Bot identity"},
              {"label": "狀態管理", "type": "Purple connection", "context": "Status check verification"}
            ],
            "flow_out": ["issue_task_log"]
          },
          {
            "id": "issue_task_log",
            "sequence": 5,
            "type": "Task Log",
            "label": "模組 3) 任務日誌 GitHub Issues",
            "description": "(任務單/Command Center) 記錄所有傲嬌的單",
            "status_labels": [
              {"type": "Yellow/Pending", "description": "Yellow indicator with three dots"},
              {"type": "Green/Completed", "description": "Green indicator with single dot"},
              {"type": "Red/Failed", "description": "Red indicator with single dot"}
            ],
            "flow_out": ["action_trigger"]
          },
          {
            "id": "action_trigger",
            "sequence": 6,
            "type": "Trigger",
            "label": "模組 4) 觸發器 GitHub Issues & Actions",
            "description": "登記與觸發：登記任務單 (Open Issue)，觸發對應 Action",
            "icon": {"name": "Clock", "visual_style": "Minimalist cyan clock"},
            "flow_out": ["workflow_engine"]
          }
        ]
      },
      {
        "stage": "Execution Pipelines",
        "boundary_label": "Execution Pipelines",
        "components": [
          {
            "id": "workflow_engine",
            "sequence": 7,
            "type": "Workflow Engine",
            "label": "模組 E) 工作流引擎 GitHub Actions",
            "sub_label": "(小龍蝦工作流程) 小龍蝦工坊",
            "icon": {
              "name": "Pipeline Nodes",
              "description": "Directed graph of nodes showing pipeline flow"
            },
            "pipelines": {
              "execution_pipeline": {
                "label": "B. 小龍蝦工坊 流水線 (Lobster Workshop Pipeline)",
                "identity_context": "[App名稱] [Bot]",
                "steps": [
                  {
                    "step_id": "step_1",
                    "label": "1. Lobster 1: 上網抓取影片",
                    "icon": {"name": "Lobster holding Cloud Arrow"}
                  },
                  {
                    "step_id": "transition_1_to_2",
                    "type": "Handover",
                    "label": "Tool 交接 (1交2)"
                  },
                  {
                    "step_id": "step_2",
                    "label": "3. Lobster 2: 擷取字幕",
                    "icon": {"name": "Lobster holding Bubble"}
                  },
                  {
                    "step_id": "transition_2_to_result",
                    "type": "Handover",
                    "label": "Tool 交接 (2交3)"
                  },
                  {
                    "step_id": "step_result",
                    "label": "成果回報 (Result Box)",
                    "icon": {"name": "Metallic cute blue robot head"}
                  }
                ]
              },
              "feedback_pipeline": {
                "label": "C. 資料回傳至資訊報 (Data Feedback)",
                "identity_context": "[App名稱] [Bot]",
                "steps": [
                  {
                    "step_id": "data_1",
                    "label": "C1. 大海的資料夾",
                    "icon": {"name": "Folder"}
                  },
                  {
                    "step_id": "data_2",
                    "label": "C2. 機密網址 (URL) 而非大檔案",
                    "icon": {"name": "Camera/URL"}
                  },
                  {
                    "step_id": "data_3",
                    "label": "C3. 成果回報",
                    "icon": {"name": "Verification Bot"}
                  }
                ]
              }
            },
            "flow_out": ["gateway_output_feedback"]
          }
        ]
      },
      {
        "stage": "Output Phase",
        "components": [
          {
            "id": "gateway_output_feedback",
            "sequence": 8,
            "type": "Output Feedback",
            "label": "6. 通訊軟體 (Messaging App Feedback)",
            "description": "6. 成果回報 -> 通知1使用者",
            "icon": {
              "name": "Large Speech Bubble",
              "visual_style": "Green, glowing bubble with three dots",
              "interactivity": "Neon glow on interactable node"
            }
          }
        ]
      }
    ]
  },
  "bottom_panel": {
    "title": "關鍵建議與裝備 (Critical Suggestions & Gear)",
    "visual_adjustment": {
      "action": "Shift Left",
      "margin_right_offset": "160px",
      "width": "85%",
      "positioning": "Align to bottom-left relative to main content, leaving right corner empty"
    },
    "container_style": "Wide frosted glass panel with cyan glowing edge, left-aligned",
    "equipment_tags": [
      {"label": "GitOps 修正為 ChatOps", "description": "Direct interaction from chat interfaces"},
      {"label": "套用 Labels", "description": "For automated workflow filtering"},
      {"label": "安全驗證", "description": "Identity verification core"},
      {"label": "機密保護", "description": "Encrypted environments (GitHub Actions Secrets)"},
      {"label": "GitHub App 整合", "description": "Official API-driven identity"},
      {"label": "API 存取控制", "description": "Scoping limited permissions via GitHub App"},
      {"label": "身分識別", "description": "Distinguishing between user and bots via [bot] suffix"}
    ]
  }
}
