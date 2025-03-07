# RadiusProperty Field
<span>
:::warning[Obsolete]

Note: This API is now obsolete.

:::

</span>

Defines the <a href="P_Avalonia_Media_RadialGradientBrush_Radius">Radius</a> property.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[ObsoleteAttribute("Use RadiusX/RadiusY, note that those properties use _relative_ values, so Radius=0.55 would become RadiusX=55% RadiusY=55%. Radius property is always relative even if the rest of the brush uses absolute values.")]
public static readonly StyledProperty<double> RadiusProperty
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ObsoleteAttribute("Use RadiusX/RadiusY, note that those properties use _relative_ values, so Radius=0.55 would become RadiusX=55% RadiusY=55%. Radius property is always relative even if the rest of the brush uses absolute values.")>
Public Shared ReadOnly RadiusProperty As StyledProperty(Of Double)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ObsoleteAttribute("Use RadiusX/RadiusY, note that those properties use _relative_ values, so Radius=0.55 would become RadiusX=55% RadiusY=55%. Radius property is always relative even if the rest of the brush uses absolute values.")>]
static val RadiusProperty: StyledProperty<float>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/RadialGradientBrush.cs" title="View the source code">View Source</a>



#### Field Value
<a href="T_Avalonia_StyledProperty_1">StyledProperty</a>(<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>)

## See Also


#### Reference
<a href="T_Avalonia_Media_RadialGradientBrush">RadialGradientBrush Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
