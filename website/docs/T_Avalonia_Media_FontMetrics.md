# FontMetrics Structure


The font metrics is holding information about a font's ascent, descent, etc. in design em units.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct FontMetrics : IEquatable<FontMetrics>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure FontMetrics
	Implements IEquatable(Of FontMetrics)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type FontMetrics = 
    struct
        inherit ValueType
        interface IEquatable<FontMetrics>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/FontMetrics.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  FontMetrics</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(FontMetrics)</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_FontMetrics_Ascent">Ascent</a></td>
<td>Gets the recommended distance above the baseline in design em size.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FontMetrics_Descent">Descent</a></td>
<td>Gets the recommended distance under the baseline in design em size.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FontMetrics_DesignEmHeight">DesignEmHeight</a></td>
<td>Gets the font design units per em.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FontMetrics_IsFixedPitch">IsFixedPitch</a></td>
<td>A <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a> value indicating whether all glyphs in the font have the same advancement.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FontMetrics_LineGap">LineGap</a></td>
<td>Gets the recommended additional space between two lines of text in design em size.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FontMetrics_LineSpacing">LineSpacing</a></td>
<td>Gets the recommended line spacing of a formed text line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FontMetrics_StrikethroughPosition">StrikethroughPosition</a></td>
<td>Gets a value that indicates the distance of the strikethrough from the baseline in design em size.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FontMetrics_StrikethroughThickness">StrikethroughThickness</a></td>
<td>Gets a value that indicates the thickness of the underline in design em size.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FontMetrics_UnderlinePosition">UnderlinePosition</a></td>
<td>Gets a value that indicates the distance of the underline from the baseline in design em size.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FontMetrics_UnderlineThickness">UnderlineThickness</a></td>
<td>Gets a value that indicates the thickness of the underline in design em size.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
