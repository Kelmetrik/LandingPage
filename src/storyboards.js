export const storyboards = {
  en: {
    quality: [
      ["Inspection", "A housing mark is recorded against DEMO-SN-0187."],
      [
        "Evidence",
        "The inspection record and defect location remain linked to the product.",
      ],
      [
        "Review owner",
        "Quality reviews the record. Disposition is pending; the product remains contained.",
      ],
      [
        "Decision",
        "The authorized disposition and its supporting evidence become part of the history.",
      ],
    ],
    apqp: [
      ["Milestone", "EOL validation — blocked."],
      [
        "Dependency",
        "The test plan is approved; the validation report still needs approval.",
      ],
      ["Responsible role", "Quality engineering owns the pending report."],
      [
        "Impact",
        "The milestone remains blocked until the required evidence is approved.",
      ],
    ],
    warehouse: [
      ["ERP request", "DEMO-PICK-010 requests 12 units of DEMO-MAT-A2."],
      ["Scan", "The operator scans DEMO-MAT-B1 at the picking location."],
      [
        "Validation",
        "Material mismatch. The movement is blocked before inventory is changed.",
      ],
      [
        "Resolution",
        "The correct material and quantity must be validated before recording the movement.",
      ],
    ],
  },
  es: {
    quality: [
      ["Inspección", "Se registra una marca en la carcasa de DEMO-SN-0187."],
      [
        "Evidencia",
        "El registro de inspección y la ubicación del defecto permanecen vinculados al producto.",
      ],
      [
        "Responsable de revisión",
        "Calidad revisa el registro. La disposición está pendiente y el producto permanece contenido.",
      ],
      [
        "Decisión",
        "La disposición autorizada y su evidencia se integran al historial.",
      ],
    ],
    apqp: [
      ["Hito", "Validación EOL — bloqueada."],
      [
        "Dependencia",
        "El plan de prueba está aprobado; falta aprobar el reporte de validación.",
      ],
      [
        "Rol responsable",
        "Ingeniería de calidad es responsable del reporte pendiente.",
      ],
      [
        "Impacto",
        "El hito permanece bloqueado hasta que se apruebe la evidencia requerida.",
      ],
    ],
    warehouse: [
      [
        "Solicitud del ERP",
        "DEMO-PICK-010 solicita 12 unidades de DEMO-MAT-A2.",
      ],
      [
        "Escaneo",
        "El operador escanea DEMO-MAT-B1 en la ubicación de picking.",
      ],
      [
        "Validación",
        "El material no corresponde. El movimiento se bloquea antes de modificar el inventario.",
      ],
      [
        "Resolución",
        "Se deben validar el material correcto y la cantidad antes de registrar el movimiento.",
      ],
    ],
  },
};
