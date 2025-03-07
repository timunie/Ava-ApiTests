# IPen Interface


Describes how a stroke is drawn.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IPen
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IPen
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IPen = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/IPen.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_IPen_Brush">Brush</a></td>
<td>Gets the brush used to draw the stroke.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IPen_DashStyle">DashStyle</a></td>
<td>Gets the style of dashed lines drawn with a <a href="T_Avalonia_Media_Pen">Pen</a> object.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IPen_LineCap">LineCap</a></td>
<td>Gets the type of shape to use on both ends of a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IPen_LineJoin">LineJoin</a></td>
<td>Gets a value describing how to join consecutive line or curve segments in a <a href="T_Avalonia_Media_PathFigure">PathFigure</a> contained in a <a href="T_Avalonia_Media_PathGeometry">PathGeometry</a> object.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IPen_MiterLimit">MiterLimit</a></td>
<td>Gets the limit of the thickness of the join on a mitered corner.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IPen_Thickness">Thickness</a></td>
<td>Gets the stroke thickness.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_BrushExtensions_ToImmutable_2">ToImmutable()</a></td>
<td>Converts a pen to an immutable pen.<br />(Defined by <a href="T_Avalonia_Media_BrushExtensions">BrushExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
