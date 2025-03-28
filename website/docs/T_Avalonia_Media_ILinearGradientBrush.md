# ILinearGradientBrush Interface


A brush that draws with a linear gradient.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface ILinearGradientBrush : IGradientBrush, 
	IBrush
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface ILinearGradientBrush
	Inherits IGradientBrush, IBrush
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type ILinearGradientBrush = 
    interface
        interface IGradientBrush
        interface IBrush
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/ILinearGradientBrush.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Media_IBrush">IBrush</a>, <a href="T_Avalonia_Media_IGradientBrush">IGradientBrush</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_ILinearGradientBrush_EndPoint">EndPoint</a></td>
<td>Gets or sets the end point for the gradient.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IGradientBrush_GradientStops">GradientStops</a></td>
<td>Gets the brush's gradient stops.<br />(Inherited from <a href="T_Avalonia_Media_IGradientBrush">IGradientBrush</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IBrush_Opacity">Opacity</a></td>
<td>Gets the opacity of the brush.<br />(Inherited from <a href="T_Avalonia_Media_IBrush">IBrush</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IGradientBrush_SpreadMethod">SpreadMethod</a></td>
<td>Gets the brush's spread method that defines how to draw a gradient that doesn't fill the bounds of the destination control.<br />(Inherited from <a href="T_Avalonia_Media_IGradientBrush">IGradientBrush</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_ILinearGradientBrush_StartPoint">StartPoint</a></td>
<td>Gets or sets the start point for the gradient.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IBrush_Transform">Transform</a></td>
<td>Gets the transform of the brush.<br />(Inherited from <a href="T_Avalonia_Media_IBrush">IBrush</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IBrush_TransformOrigin">TransformOrigin</a></td>
<td>Gets the origin of the brushes <a href="P_Avalonia_Media_IBrush_Transform">Transform</a><br />(Inherited from <a href="T_Avalonia_Media_IBrush">IBrush</a>)</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_BrushExtensions_ToImmutable">ToImmutable()</a></td>
<td>Converts a brush to an immutable brush.<br />(Defined by <a href="T_Avalonia_Media_BrushExtensions">BrushExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

