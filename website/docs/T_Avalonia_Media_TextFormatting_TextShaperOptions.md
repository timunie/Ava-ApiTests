# TextShaperOptions Structure


Options to customize text shaping.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct TextShaperOptions : IEquatable<TextShaperOptions>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure TextShaperOptions
	Implements IEquatable(Of TextShaperOptions)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type TextShaperOptions = 
    struct
        inherit ValueType
        interface IEquatable<TextShaperOptions>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextShaperOptions.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  TextShaperOptions</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(TextShaperOptions)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextShaperOptions__ctor_1">TextShaperOptions(IGlyphTypeface, Double, SByte, CultureInfo, Double, Double)</a></td>
<td>Initializes a new instance of the TextShaperOptions class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextShaperOptions__ctor">TextShaperOptions(IGlyphTypeface, IReadOnlyList(FontFeature), Double, SByte, CultureInfo, Double, Double)</a></td>
<td>Initializes a new instance of the TextShaperOptions class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextShaperOptions_BidiLevel">BidiLevel</a></td>
<td>Get the bidi level of the text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextShaperOptions_Culture">Culture</a></td>
<td>Get the culture.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextShaperOptions_FontFeatures">FontFeatures</a></td>
<td>Get features.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextShaperOptions_FontRenderingEmSize">FontRenderingEmSize</a></td>
<td>Get the font rendering em size.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextShaperOptions_IncrementalTabWidth">IncrementalTabWidth</a></td>
<td>Get the incremental tab width.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextShaperOptions_LetterSpacing">LetterSpacing</a></td>
<td>Get the letter spacing.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextShaperOptions_Typeface">Typeface</a></td>
<td>Get the typeface.</td>
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
