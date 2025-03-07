# TextDecorationUnit Enumeration


Specifies the unit type of either a <a href="P_Avalonia_Media_TextDecoration_StrokeOffset">StrokeOffset</a> or a <a href="P_Avalonia_Media_TextDecoration_StrokeThickness">StrokeThickness</a> value.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum TextDecorationUnit
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration TextDecorationUnit
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type TextDecorationUnit
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextDecorationUnit.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>FontRecommended</td>
<td>0</td>
<td>A unit value that is relative to the font used for the <a href="T_Avalonia_Media_TextDecoration">TextDecoration</a>. If the decoration spans multiple fonts, an average recommended value is calculated. This is the default value.</td>
</tr>
<tr>
<td>FontRenderingEmSize</td>
<td>1</td>
<td>A unit value that is relative to the em size of the font. The value of the offset or thickness is equal to the offset or thickness value multiplied by the font em size.</td>
</tr>
<tr>
<td>Pixel</td>
<td>2</td>
<td>A unit value that is expressed in pixels.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
