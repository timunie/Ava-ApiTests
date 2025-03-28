# Radius Property
<span>
:::warning[Obsolete]

Note: This API is now obsolete.

:::

</span>

Gets or sets the horizontal and vertical radius of the outermost circle of the radial gradient.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[ObsoleteAttribute("Use RadiusX/RadiusY, note that those properties use _relative_ values, so Radius=0.55 would become RadiusX=55% RadiusY=55%. Radius property is always relative even if the rest of the brush uses absolute values.")]
public double Radius { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ObsoleteAttribute("Use RadiusX/RadiusY, note that those properties use _relative_ values, so Radius=0.55 would become RadiusX=55% RadiusY=55%. Radius property is always relative even if the rest of the brush uses absolute values.")>
Public Property Radius As Double
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ObsoleteAttribute("Use RadiusX/RadiusY, note that those properties use _relative_ values, so Radius=0.55 would become RadiusX=55% RadiusY=55%. Radius property is always relative even if the rest of the brush uses absolute values.")>]
abstract Radius : float with get, set
[<ObsoleteAttribute("Use RadiusX/RadiusY, note that those properties use _relative_ values, so Radius=0.55 would become RadiusX=55% RadiusY=55%. Radius property is always relative even if the rest of the brush uses absolute values.")>]
override Radius : float with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/RadialGradientBrush.cs#L106" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>

#### Implements
<a href="P_Avalonia_Media_IRadialGradientBrush_Radius">IRadialGradientBrush.Radius</a>  


## See Also


#### Reference
<a href="T_Avalonia_Media_RadialGradientBrush">RadialGradientBrush Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

