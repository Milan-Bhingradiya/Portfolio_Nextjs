"for technology enter section"

import React from 'react'

export default function Tag({name}:{name:string}) {
  return (
      <div
          style={{
              background: "#283240",
              height: "34px",
              padding: "0.3rem",
              margin: "2px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              color: "#ffffff",
              borderRadius: "4px"
          }}
      >
          <div className="flex flex-row m-1">
              <div  >{name}</div>
              {/* <Cancel

                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                        handleDelete(name);
                    }}
                /> */}
          </div>
      </div>
  )
}
