"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

// Location data for each point with descriptions and URLs
const locationData = {
  "Group 16": {
    name: "Senegal",
    description: "Dakar, Senegal",
    url: "/locations/Senegal",
  },
  "Group 17": {
    name: "Tanzania",
    description: "Dar es salam, Tanzania",
    url: "/locations/Tanzania",
  },
  "Group 23": {
    name: "Mozambique",
    description: "Maputo, Mozambique",
    url: "/locations/Mozambique",
  },
  "Group 24": {
    name: "Gabon",
    description: "Libreville, Gabon",
    url: "/locations/Gabon",
  },
  "Group 26": {
    name: "Miami",
    description: "Tropical paradise with vibrant nightlife and beaches",
    url: "https://en.wikipedia.org/wiki/Miami",
  },
  "Group 25": {
    name: "Zambia",
    description: "Lusaka, Zambia",
    url: "/locations/Zambia",
  },

  "Group 18": {
    name: "Liberia",
    description: "Monrovia, Liberia",
    url: "/locations/Liberia"
  },
  "Group 20": {
    name: "Rwanda",
    description: "Kigali, Rwanda",
    url: "/locations/Rwanda",
  },
  "Group 19": {
    name: "Angola",
    description: "Luanda, Angola",
    url: "/locations/Angola",
  },
}

interface TooltipState {
  visible: boolean
  x: number
  y: number
  location: {
    name: string
    description: string
    url: string
  } | null
}

function AnimatedPoints() {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    location: null,
  })

  const handleMouseEnter = (event: React.MouseEvent, locationKey: keyof typeof locationData) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const svgRect = event.currentTarget.closest("svg")?.getBoundingClientRect()

    if (svgRect) {
      setTooltip({
        visible: true,
        x: rect.left - svgRect.left + rect.width / 2,
        y: rect.top - svgRect.top - 10,
        location: locationData[locationKey],
      })
    }
  }

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }))
  }

  return (
    <>

      <g
        id="Group 16"
        opacity="0.5"
        style={{ cursor: "pointer" }}
        onMouseEnter={(e) => handleMouseEnter(e, "Group 16")}
        onMouseLeave={handleMouseLeave}
        filter="url(#filter2_d_35_8384)">
        <motion.path
          id="Vector_7"
          d="M310.705 290.677C313.482 290.677 315.734 292.928 315.734 295.705C315.734 298.482 313.482 300.734 310.705 300.734C307.928 300.734 305.677 298.482 305.677 295.705C305.677 292.928 307.928 290.677 310.705 290.677Z"
          animate={{
            stroke: ["rgba(255, 187, 187)", "rgba(250, 62, 87)", "rgba(255, 187, 187)"],
            strokeWidth: [2.23501, 3.8, 2.23501],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0,
          }}
          stroke="#FFBBBB"
          strokeWidth="2.23501" />
        <path id="Vector_8" d="M310.705 298.499C312.248 298.499 313.499 297.248 313.499 295.705C313.499 294.162 312.248 292.911 310.705 292.911C309.162 292.911 307.911 294.162 307.911 295.705C307.911 297.248 309.162 298.499 310.705 298.499Z" fill="white" />
        <path id="Vector_9" d="M310.705 291.765C312.88 291.765 314.644 293.529 314.644 295.705C314.644 297.88 312.88 299.644 310.705 299.644C308.529 299.644 306.765 297.88 306.765 295.705C306.766 293.529 308.529 291.765 310.705 291.765Z" stroke="white" strokeWidth="0.0558753" />
      </g>
      <g id="Group 17"
        style={{ cursor: "pointer" }}
        onMouseEnter={(e) => handleMouseEnter(e, "Group 17")}
        onMouseLeave={handleMouseLeave}
        opacity="0.5"
        filter="url(#filter3_d_35_8384)">
        <motion.path id="Vector_10"
          d="M397.705 336.677C400.482 336.677 402.734 338.928 402.734 341.705C402.734 344.482 400.482 346.734 397.705 346.734C394.928 346.734 392.677 344.482 392.677 341.705C392.677 338.928 394.928 336.677 397.705 336.677Z"
          animate={{
            stroke: ["rgba(255, 187, 187)", "rgba(250, 62, 87)", "rgba(255, 187, 187)"],
            strokeWidth: [2.23501, 3.8, 2.23501],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0,
          }}
          stroke="#FFBBBB"
          strokeWidth="2.23501" />
        <path id="Vector_11" d="M397.705 344.499C399.248 344.499 400.499 343.248 400.499 341.705C400.499 340.162 399.248 338.911 397.705 338.911C396.162 338.911 394.911 340.162 394.911 341.705C394.911 343.248 396.162 344.499 397.705 344.499Z" fill="white" />
        <path id="Vector_12" d="M397.705 337.765C399.88 337.765 401.644 339.529 401.644 341.705C401.644 343.88 399.88 345.644 397.705 345.644C395.529 345.644 393.765 343.88 393.765 341.705C393.766 339.529 395.529 337.765 397.705 337.765Z" stroke="white" strokeWidth="0.0558753" />
      </g>
      <g id="Group 23" opacity="0.5"
        style={{ cursor: "pointer" }}
        onMouseEnter={(e) => handleMouseEnter(e, "Group 23")}
        onMouseLeave={handleMouseLeave}
        filter="url(#filter4_d_35_8384)">
        <motion.path id="Vector_13"
          d="M393.705 355.677C396.482 355.677 398.734 357.928 398.734 360.705C398.734 363.482 396.482 365.734 393.705 365.734C390.928 365.734 388.677 363.482 388.677 360.705C388.677 357.928 390.928 355.677 393.705 355.677Z"
          animate={{
            stroke: ["rgba(255, 187, 187)", "rgba(250, 62, 87)", "rgba(255, 187, 187)"],
            strokeWidth: [2.23501, 3.8, 2.23501],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0,
          }}
          stroke="#FFBBBB" strokeWidth="2.23501" />
        <path id="Vector_14" d="M393.705 363.499C395.248 363.499 396.499 362.248 396.499 360.705C396.499 359.162 395.248 357.911 393.705 357.911C392.162 357.911 390.911 359.162 390.911 360.705C390.911 362.248 392.162 363.499 393.705 363.499Z" fill="white" />
        <path id="Vector_15" d="M393.705 356.765C395.88 356.765 397.644 358.529 397.644 360.705C397.644 362.88 395.88 364.644 393.705 364.644C391.529 364.644 389.765 362.88 389.765 360.705C389.766 358.529 391.529 356.765 393.705 356.765Z" stroke="white" strokeWidth="0.0558753" />
      </g>
      <g id="Group 24"
        opacity="0.5"
        style={{ cursor: "pointer" }}
        onMouseEnter={(e) => handleMouseEnter(e, "Group 24")}
        onMouseLeave={handleMouseLeave}

        filter="url(#filter5_d_35_8384)">
        <motion.path
          id="Vector_16"
          d="M354.707 324.686C357.485 324.682 359.74 326.93 359.744 329.707C359.748 332.485 357.499 334.74 354.722 334.744C351.945 334.748 349.69 332.499 349.686 329.722C349.682 326.945 351.93 324.69 354.707 324.686Z"
          animate={{
            stroke: ["rgba(255, 187, 187)", "rgba(250, 62, 87)", "rgba(255, 187, 187)"],
            strokeWidth: [2.23501, 3.8, 2.23501],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0,
          }}
          stroke="#FFBBBB" strokeWidth="2.23501" />
        <path id="Vector_17" d="M354.719 332.509C356.262 332.506 357.511 331.254 357.509 329.711C357.506 328.168 356.254 326.919 354.711 326.921C353.168 326.923 351.919 328.176 351.921 329.719C351.923 331.262 353.176 332.511 354.719 332.509Z" fill="white" />
        <path id="Vector_18" d="M354.709 325.775C356.884 325.772 358.651 327.533 358.654 329.709C358.657 331.884 356.896 333.651 354.72 333.654C352.545 333.657 350.778 331.896 350.775 329.72C350.772 327.545 352.533 325.778 354.709 325.775Z" stroke="white" strokeWidth="0.0558753" />
      </g>
      <g id="Group 25"
        style={{ cursor: "pointer" }}
        onMouseEnter={(e) => handleMouseEnter(e, "Group 25")}
        onMouseLeave={handleMouseLeave}
        opacity="0.5"
        filter="url(#filter7_d_35_8384)"
      >
        <motion.path
          id="Vector_22"
          d="M377.707 349.686C380.485 349.682 382.74 351.93 382.744 354.707C382.748 357.485 380.499 359.74 377.722 359.744C374.945 359.748 372.69 357.499 372.686 354.722C372.682 351.945 374.93 349.69 377.707 349.686Z"
          animate={{
            stroke: ["rgba(255, 187, 187)", "rgba(250, 62, 87)", "rgba(255, 187, 187)"],
            strokeWidth: [2.23501, 3.8, 2.23501],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0,
          }}
          stroke="#FFBBBB" strokeWidth="2.23501" />
        <path id="Vector_23" d="M377.719 357.509C379.262 357.506 380.511 356.254 380.509 354.711C380.506 353.168 379.254 351.919 377.711 351.921C376.168 351.923 374.919 353.176 374.921 354.719C374.923 356.262 376.176 357.511 377.719 357.509Z" fill="white" />
        <path id="Vector_24" d="M377.709 350.775C379.884 350.772 381.651 352.533 381.654 354.709C381.657 356.884 379.896 358.651 377.72 358.654C375.545 358.657 373.778 356.896 373.775 354.72C373.772 352.545 375.533 350.778 377.709 350.775Z" stroke="white" strokeWidth="0.0558753" />
      </g>
      <g id="Group 18"
        opacity="0.5"
        style={{ cursor: "pointer" }}
        onMouseEnter={(e) => handleMouseEnter(e, "Group 18")}
        onMouseLeave={handleMouseLeave}
        filter="url(#filter9_d_35_8384)">
        <motion.path
          id="Vector_28"
          d="M326.705 303.677C329.482 303.677 331.734 305.928 331.734 308.705C331.734 311.482 329.482 313.734 326.705 313.734C323.928 313.734 321.677 311.482 321.677 308.705C321.677 305.928 323.928 303.677 326.705 303.677Z"
          animate={{
            stroke: ["rgba(255, 187, 187)", "rgba(250, 62, 87)", "rgba(255, 187, 187)"],
            strokeWidth: [2.23501, 3.8, 2.23501],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0,
          }}
          stroke="#FFBBBB" strokeWidth="2.23501" />
        <path id="Vector_29" d="M326.705 311.499C328.248 311.499 329.499 310.248 329.499 308.705C329.499 307.162 328.248 305.911 326.705 305.911C325.162 305.911 323.911 307.162 323.911 308.705C323.911 310.248 325.162 311.499 326.705 311.499Z" fill="white" />
        <path id="Vector_30" d="M326.705 304.765C328.88 304.765 330.644 306.529 330.644 308.705C330.644 310.88 328.88 312.644 326.705 312.644C324.529 312.644 322.765 310.88 322.765 308.705C322.766 306.529 324.529 304.765 326.705 304.765Z" stroke="white" strokeWidth="0.0558753" />
      </g>
      <g id="Group 20"
        style={{ cursor: "pointer" }}
        onMouseEnter={(e) => handleMouseEnter(e, "Group 20")}
        onMouseLeave={handleMouseLeave}
        filter="url(#filter10_d_35_8384)">
        <motion.path
          id="Vector_31"
          d="M381.94 328.235C385.643 328.235 388.645 331.237 388.645 334.94C388.645 338.643 385.643 341.645 381.94 341.645C378.237 341.645 375.235 338.643 375.235 334.94C375.235 331.237 378.237 328.235 381.94 328.235Z"
          animate={{
            stroke: ["rgba(255, 187, 187)", "rgba(250, 62, 87)", "rgba(255, 187, 187)"],
            strokeWidth: [2.98501, 5, 2.98501],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0,
          }}
          stroke="#FFBBBB" strokeWidth="2.98002" />
        <path id="Vector_32" d="M381.94 338.665C383.997 338.665 385.665 336.997 385.665 334.94C385.665 332.883 383.997 331.215 381.94 331.215C379.883 331.215 378.215 332.883 378.215 334.94C378.215 336.997 379.883 338.665 381.94 338.665Z" fill="white" />
        <path id="Vector_33" d="M381.94 329.688C384.841 329.688 387.193 332.039 387.193 334.94C387.193 337.841 384.841 340.193 381.94 340.193C379.039 340.193 376.688 337.841 376.688 334.94C376.688 332.039 379.039 329.688 381.94 329.688Z" stroke="white" strokeWidth="0.0745004" />
      </g>
      <g id="Group 19"
        opacity="0.5"
        style={{ cursor: "pointer" }}
        onMouseEnter={(e) => handleMouseEnter(e, "Group 19")}
        onMouseLeave={handleMouseLeave}
        filter="url(#filter11_d_35_8384)">
        <motion.path
          id="Vector_34"
          d="M362.705 351.677C365.482 351.677 367.734 353.928 367.734 356.705C367.734 359.482 365.482 361.734 362.705 361.734C359.928 361.734 357.677 359.482 357.677 356.705C357.677 353.928 359.928 351.677 362.705 351.677Z"
          animate={{
            stroke: ["rgba(255, 187, 187)", "rgba(250, 62, 87)", "rgba(255, 187, 187)"],
            strokeWidth: [2.23501, 3.8, 2.23501],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0,
          }}
          stroke="#FFBBBB" strokeWidth="2.23501" />
        <path id="Vector_35" d="M362.705 359.499C364.248 359.499 365.499 358.248 365.499 356.705C365.499 355.162 364.248 353.911 362.705 353.911C361.162 353.911 359.911 355.162 359.911 356.705C359.911 358.248 361.162 359.499 362.705 359.499Z" fill="white" />
        <path id="Vector_36" d="M362.705 352.765C364.88 352.765 366.644 354.529 366.644 356.705C366.644 358.88 364.88 360.644 362.705 360.644C360.529 360.644 358.765 358.88 358.765 356.705C358.766 354.529 360.529 352.765 362.705 352.765Z" stroke="white" strokeWidth="0.0558753" />
      </g>
      {tooltip.visible && tooltip.location && (
        <foreignObject x={tooltip.x - 120} y={tooltip.y - 80} width="240" height="70" style={{ pointerEvents: "none" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-gray-900 text-white text-sm rounded-lg shadow-xl p-3 max-w-60"
          >
            <a
              href={tooltip.location.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-300 hover:text-blue-200 transition-colors block mb-1"
              style={{ pointerEvents: "auto" }}
            >
              {tooltip.location.name}
            </a>
            <p className="text-gray-300 text-xs leading-relaxed">{tooltip.location.description}</p>
          </motion.div>
        </foreignObject>
      )}
    </>
  )
}

export default AnimatedPoints





//   < g
// id = "Group 17"
// opacity = "0.5"
// filter = "url(#filter3_d_35_8384)"
// style = {{ cursor: "pointer" }}
// onMouseEnter = {(e) => handleMouseEnter(e, "Group 17")}
// onMouseLeave = { handleMouseLeave }
//   >
// <motion.path
//   id="Vector_10"
//   d="M397.705 336.677C400.482 336.677 402.734 338.928 402.734 341.705C402.734 344.482 400.482 346.734 397.705 346.734C394.928 346.734 392.677 344.482 392.677 341.705C392.677 338.928 394.928 336.677 397.705 336.677Z"
//   stroke="#FFBBBB"
//   animate={{
//     stroke: ["rgba(255, 187, 187)", "rgba(250, 62, 87)", "rgba(255, 187, 187)"],
//     strokeWidth: [2.23501, 3.8, 2.23501],
//   }}
//   transition={{
//     duration: 2,
//     repeat: Number.POSITIVE_INFINITY,
//     ease: "easeInOut",
//     delay: 0,
//   }}
//   strokeWidth="2.23501"
// />
// <path
//   id="Vector_11"
//   d="M397.705 344.499C399.248 344.499 400.499 343.248 400.499 341.705C400.499 340.162 399.248 338.911 397.705 338.911C396.162 338.911 394.911 340.162 394.911 341.705C394.911 343.248 396.162 344.499 397.705 344.499Z"
//   fill="white"
// />
// <path
//   id="Vector_12"
//   d="M397.705 337.765C399.88 337.765 401.644 339.529 401.644 341.705C401.644 343.88 399.88 345.644 397.705 345.644C395.529 345.644 393.765 343.88 393.765 341.705C393.766 339.529 395.529 337.765 397.705 337.765Z"
//   stroke="white"
//   strokeWidth="0.0558753"
// />
// </ >