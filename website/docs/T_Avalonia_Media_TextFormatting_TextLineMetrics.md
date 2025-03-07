# TextLineMetrics Structure


Represents a metric for a <a href="T_Avalonia_Media_TextFormatting_TextLine">TextLine</a> objects, that holds information about ascent, descent, line gap, size and origin of the text line.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct TextLineMetrics : IEquatable<TextLineMetrics>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure TextLineMetrics
	Implements IEquatable(Of TextLineMetrics)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type TextLineMetrics = 
    struct
        inherit ValueType
        interface IEquatable<TextLineMetrics>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextLineMetrics.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  TextLineMetrics</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(TextLineMetrics)</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLineMetrics_Extent">Extent</a></td>
<td>Gets the distance from the top-most to bottom-most black pixel in a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLineMetrics_HasOverflowed">HasOverflowed</a></td>
<td>Gets a value that indicates whether content of the line overflows the specified paragraph width.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLineMetrics_Height">Height</a></td>
<td>Gets the height of a line of text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLineMetrics_NewlineLength">NewlineLength</a></td>
<td>Gets the number of newline characters at the end of a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLineMetrics_OverhangAfter">OverhangAfter</a></td>
<td>Gets the distance that black pixels extend beyond the bottom alignment edge of a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLineMetrics_OverhangLeading">OverhangLeading</a></td>
<td>Gets the distance that black pixels extend prior to the left leading alignment edge of the line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLineMetrics_OverhangTrailing">OverhangTrailing</a></td>
<td>Gets the distance that black pixels extend following the right trailing alignment edge of the line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLineMetrics_Start">Start</a></td>
<td>Gets the distance from the start of a paragraph to the starting point of a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLineMetrics_TextBaseline">TextBaseline</a></td>
<td>Gets the distance from the top to the baseline of the line of text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLineMetrics_TrailingWhitespaceLength">TrailingWhitespaceLength</a></td>
<td>Gets the number of whitespace code points beyond the last non-blank character in a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLineMetrics_Width">Width</a></td>
<td>Gets the width of a line of text, excluding trailing whitespace characters.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLineMetrics_WidthIncludingTrailingWhitespace">WidthIncludingTrailingWhitespace</a></td>
<td>Gets the width of a line of text, including trailing whitespace characters.</td>
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
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
