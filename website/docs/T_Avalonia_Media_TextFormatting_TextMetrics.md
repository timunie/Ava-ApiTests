# TextMetrics Structure


A metric that holds information about text specific measurements.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct TextMetrics : IEquatable<TextMetrics>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure TextMetrics
	Implements IEquatable(Of TextMetrics)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type TextMetrics = 
    struct
        inherit ValueType
        interface IEquatable<TextMetrics>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextMetrics.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  TextMetrics</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(TextMetrics)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextMetrics__ctor">TextMetrics(IGlyphTypeface, Double)</a></td>
<td>Initializes a new instance of the TextMetrics class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextMetrics_Ascent">Ascent</a></td>
<td>Gets the recommended distance above the baseline.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextMetrics_Descent">Descent</a></td>
<td>Gets the recommended distance under the baseline.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextMetrics_FontRenderingEmSize">FontRenderingEmSize</a></td>
<td>Em size of font used to format and display text</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextMetrics_LineGap">LineGap</a></td>
<td>Gets the recommended additional space between two lines of text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextMetrics_LineHeight">LineHeight</a></td>
<td>Gets the estimated line height.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextMetrics_StrikethroughPosition">StrikethroughPosition</a></td>
<td>Gets a value that indicates the distance of the strikethrough from the baseline.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextMetrics_StrikethroughThickness">StrikethroughThickness</a></td>
<td>Gets a value that indicates the thickness of the underline.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextMetrics_UnderlinePosition">UnderlinePosition</a></td>
<td>Gets a value that indicates the distance of the underline from the baseline.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextMetrics_UnderlineThickness">UnderlineThickness</a></td>
<td>Gets a value that indicates the thickness of the underline.</td>
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

