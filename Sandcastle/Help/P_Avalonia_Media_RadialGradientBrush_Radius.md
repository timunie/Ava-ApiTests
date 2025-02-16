---
title:Radius Property
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Radius Property
<blockquote><strong>Note: This API is now obsolete.</strong></blockquote>




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[ObsoleteAttribute("Use RadiusX/RadiusY, note that those properties use _relative_ values, so Radius=0.55 would become RadiusX=55% RadiusY=55%. Radius property is always relative even if the rest of the brush uses absolute values.")]
public double Radius { get; set; }
```
**VB**
``` VB
<ObsoleteAttribute("Use RadiusX/RadiusY, note that those properties use _relative_ values, so Radius=0.55 would become RadiusX=55% RadiusY=55%. Radius property is always relative even if the rest of the brush uses absolute values.")>
Public Property Radius As Double
	Get
	Set
```
**F#**
``` F#
[<ObsoleteAttribute("Use RadiusX/RadiusY, note that those properties use _relative_ values, so Radius=0.55 would become RadiusX=55% RadiusY=55%. Radius property is always relative even if the rest of the brush uses absolute values.")>]
abstract Radius : float with get, set
[<ObsoleteAttribute("Use RadiusX/RadiusY, note that those properties use _relative_ values, so Radius=0.55 would become RadiusX=55% RadiusY=55%. Radius property is always relative even if the rest of the brush uses absolute values.")>]
override Radius : float with get, set
```



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>

#### Implements
<a href="P_Avalonia_Media_IRadialGradientBrush_Radius">IRadialGradientBrush.Radius</a>  


## See Also


#### Reference
<a href="T_Avalonia_Media_RadialGradientBrush">RadialGradientBrush Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
