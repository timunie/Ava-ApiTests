# FormattedText Class


The FormattedText class is targeted at programmers needing to add some simple text to a MIL visual.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class FormattedText
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class FormattedText
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type FormattedText = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/FormattedText.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  FormattedText</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_FormattedText__ctor">FormattedText(String, CultureInfo, FlowDirection, Typeface, Double, IBrush)</a></td>
<td>Construct a FormattedText object.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_Baseline">Baseline</a></td>
<td>The distance from the top of the first line to the baseline of the first line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_Extent">Extent</a></td>
<td>The distance from the topmost black pixel of the first line to the bottommost black pixel of the last line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_FlowDirection">FlowDirection</a></td>
<td>Defines the flow direction</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_Height">Height</a></td>
<td>The distance from the top of the first line to the bottom of the last line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_LineHeight">LineHeight</a></td>
<td>Gets or sets the height of, or the spacing between, each line where zero represents the default line height.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_MaxLineCount">MaxLineCount</a></td>
<td>Defines the maximum number of lines to display. The last line of text displayed is the lineCount-1'th line, or the last whole line that will fit within the count set by MaxTextHeight, whichever occurs first. Use the Trimming property to control how the omission of text is indicated</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_MaxTextHeight">MaxTextHeight</a></td>
<td>Sets the maximum length of a column of text. The last line of text displayed is the last whole line that will fit within this limit, or the nth line as specified by MaxLineCount, whichever occurs first. Use the Trimming property to control how the omission of text is indicated.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_MaxTextWidth">MaxTextWidth</a></td>
<td>The MaxTextWidth property defines the alignment edges for the FormattedText. For example, left aligned text is wrapped such that the leftmost glyph alignment point on each line falls exactly on the left edge of the rectangle. Note that for many fonts, especially in italic style, some glyph strokes may extend beyond the edges of the alignment rectangle. For this reason, it is recommended that clients draw text with at least 1/6 em (i.e of the font size) unused margin space either side. Zero value of MaxTextWidth is equivalent to the maximum possible paragraph width.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_OverhangAfter">OverhangAfter</a></td>
<td>The distance from the bottom of the last line to the extent bottom.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_OverhangLeading">OverhangLeading</a></td>
<td>The maximum distance from the leading black pixel to the leading alignment point of a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_OverhangTrailing">OverhangTrailing</a></td>
<td>The maximum distance from the trailing black pixel to the trailing alignment point of a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_TextAlignment">TextAlignment</a></td>
<td>Defines the alignment of text within the column</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_Trimming">Trimming</a></td>
<td>Defines how omission of text is indicated. CharacterEllipsis trimming allows partial words to be displayed, while WordEllipsis removes whole words to fit. Both guarantee to include an ellipsis ('...') at the end of the lines where text has been trimmed as a result of line and column limits.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_Width">Width</a></td>
<td>The maximum advance width between the leading and trailing alignment points of a line, excluding the width of whitespace characters at the end of the line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_WidthIncludingTrailingWhitespace">WidthIncludingTrailingWhitespace</a></td>
<td>The maximum advance width between the leading and trailing alignment points of a line, including the width of whitespace characters at the end of the line.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_BuildGeometry">BuildGeometry(Point)</a></td>
<td>Obtains geometry for the text, including underlines and strikethroughs.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_BuildHighlightGeometry_1">BuildHighlightGeometry(Point)</a></td>
<td>Builds a highlight geometry object.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_BuildHighlightGeometry">BuildHighlightGeometry(Point, Int32, Int32)</a></td>
<td>Builds a highlight geometry object for a given character range.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_GetMaxTextWidths">GetMaxTextWidths()</a></td>
<td>Obtains a copy of the array of lengths, which will be applied to each line of text in turn. If the text covers more lines than there are entries in the length array, the last entry is reused as many times as required. The maxTextWidths array overrides the MaxTextWidth property.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetCulture_1">SetCulture(CultureInfo)</a></td>
<td>Sets or changes the culture for the text object.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetCulture">SetCulture(CultureInfo, Int32, Int32)</a></td>
<td>Sets or changes the culture for the text object.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetFontFamily_1">SetFontFamily(FontFamily)</a></td>
<td>Sets or changes the font family for the text object</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetFontFamily_3">SetFontFamily(String)</a></td>
<td>Sets or changes the font family for the text object</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetFontFamily">SetFontFamily(FontFamily, Int32, Int32)</a></td>
<td>Sets or changes the font family for the text object</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetFontFamily_2">SetFontFamily(String, Int32, Int32)</a></td>
<td>Sets or changes the font family for the text object</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetFontFeatures_1">SetFontFeatures(FontFeatureCollection)</a></td>
<td>Sets or changes the font features for the text object</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetFontFeatures">SetFontFeatures(FontFeatureCollection, Int32, Int32)</a></td>
<td>Sets or changes the font features for the text object</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetFontSize_1">SetFontSize(Double)</a></td>
<td>Sets or changes the font em size measured in MIL units</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetFontSize">SetFontSize(Double, Int32, Int32)</a></td>
<td>Sets or changes the font em size measured in MIL units</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetFontStyle_1">SetFontStyle(FontStyle)</a></td>
<td>Sets or changes the font style</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetFontStyle">SetFontStyle(FontStyle, Int32, Int32)</a></td>
<td>Sets or changes the font style</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetFontTypeface_1">SetFontTypeface(Typeface)</a></td>
<td>Sets or changes the type face</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetFontTypeface">SetFontTypeface(Typeface, Int32, Int32)</a></td>
<td>Sets or changes the type face</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetFontWeight_1">SetFontWeight(FontWeight)</a></td>
<td>Sets or changes the font weight</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetFontWeight">SetFontWeight(FontWeight, Int32, Int32)</a></td>
<td>Sets or changes the font weight</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetForegroundBrush_1">SetForegroundBrush(IBrush)</a></td>
<td>Sets foreground brush used for drawing text</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetForegroundBrush">SetForegroundBrush(IBrush, Int32, Int32)</a></td>
<td>Sets foreground brush used for drawing text</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetMaxTextWidths">SetMaxTextWidths(Double[])</a></td>
<td>Sets the array of lengths, which will be applied to each line of text in turn. If the text covers more lines than there are entries in the length array, the last entry is reused as many times as required. The maxTextWidths array overrides the MaxTextWidth property.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetTextDecorations_1">SetTextDecorations(TextDecorationCollection)</a></td>
<td>Sets or changes the text decorations</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FormattedText_SetTextDecorations">SetTextDecorations(TextDecorationCollection, Int32, Int32)</a></td>
<td>Sets or changes the text decorations</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Media_FormattedText_DefaultIdealToReal">DefaultIdealToReal</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Media_FormattedText_DefaultRealToIdeal">DefaultRealToIdeal</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Media_FormattedText_GreatestMultiplierOfEm">GreatestMultiplierOfEm</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Media_FormattedText_IdealInfiniteWidth">IdealInfiniteWidth</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Media_FormattedText_RealInfiniteWidth">RealInfiniteWidth</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
