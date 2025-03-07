# TextLayout Class


Represents a multi line text layout.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class TextLayout : IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class TextLayout
	Implements IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type TextLayout = 
    class
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextLayout.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  TextLayout</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLayout__ctor">TextLayout(ITextSource, TextParagraphProperties, TextTrimming, Double, Double, Int32)</a></td>
<td>Initializes a new instance of the TextLayout class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLayout__ctor_2">TextLayout(String, Typeface, Double, IBrush, TextAlignment, TextWrapping, TextTrimming, TextDecorationCollection, FlowDirection, Double, Double, Double, Double, Int32, IReadOnlyList(ValueSpan(TextRunProperties)))</a></td>
<td>Initializes a new instance of the TextLayout class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLayout__ctor_1">TextLayout(String, Typeface, FontFeatureCollection, Double, IBrush, TextAlignment, TextWrapping, TextTrimming, TextDecorationCollection, FlowDirection, Double, Double, Double, Double, Int32, IReadOnlyList(ValueSpan(TextRunProperties)))</a></td>
<td>Initializes a new instance of the TextLayout class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLayout_Baseline">Baseline</a></td>
<td>The distance from the top of the first line to the baseline of the first line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLayout_Extent">Extent</a></td>
<td>The distance from the topmost black pixel of the first line to the bottommost black pixel of the last line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLayout_Height">Height</a></td>
<td>The distance from the top of the first line to the bottom of the last line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLayout_LetterSpacing">LetterSpacing</a></td>
<td>Gets the text spacing.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLayout_LineHeight">LineHeight</a></td>
<td>Gets or sets the height of each line of text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLayout_MaxHeight">MaxHeight</a></td>
<td>Gets the maximum height.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLayout_MaxLines">MaxLines</a></td>
<td>Gets the maximum number of text lines.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLayout_MaxWidth">MaxWidth</a></td>
<td>Gets the maximum width.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLayout_OverhangAfter">OverhangAfter</a></td>
<td>The distance from the bottom of the last line to the extent bottom.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLayout_OverhangLeading">OverhangLeading</a></td>
<td>The maximum distance from the leading black pixel to the leading alignment point of a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLayout_OverhangTrailing">OverhangTrailing</a></td>
<td>The maximum distance from the trailing black pixel to the trailing alignment point of a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLayout_TextLines">TextLines</a></td>
<td>Gets the text lines.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLayout_Width">Width</a></td>
<td>The maximum advance width between the leading and trailing alignment points of a line, excluding the width of whitespace characters at the end of the line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLayout_WidthIncludingTrailingWhitespace">WidthIncludingTrailingWhitespace</a></td>
<td>The maximum advance width between the leading and trailing alignment points of a line, including the width of whitespace characters at the end of the line.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLayout_Dispose">Dispose()</a></td>
<td>Releases all resources used by the TextLayout</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLayout_Draw">Draw(DrawingContext, Point)</a></td>
<td>Draws the text layout.</td>
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
<td><a href="M_Avalonia_Media_TextFormatting_TextLayout_GetLineIndexFromCharacterIndex">GetLineIndexFromCharacterIndex(Int32, Boolean)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLayout_HitTestPoint">HitTestPoint(Point)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLayout_HitTestTextPosition">HitTestTextPosition(Int32)</a></td>
<td>Get the pixel location relative to the top-left of the layout box given the text position.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLayout_HitTestTextRange">HitTestTextRange(Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
