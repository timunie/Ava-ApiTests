# TextLine Class


Represents a line of text that is used for text rendering.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class TextLine : IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class TextLine
	Implements IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type TextLine = 
    class
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextLine.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  TextLine</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine__ctor">TextLine()</a></td>
<td>Initializes a new instance of the TextLine class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_Baseline">Baseline</a></td>
<td>Gets the distance from the top to the baseline of the current TextLine object.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_Extent">Extent</a></td>
<td>Gets the distance from the top-most to bottom-most black pixel in a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_FirstTextSourceIndex">FirstTextSourceIndex</a></td>
<td>Gets the first TextSource position of the current line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_HasCollapsed">HasCollapsed</a></td>
<td>Gets a value that indicates whether the line is collapsed.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_HasOverflowed">HasOverflowed</a></td>
<td>Gets a value that indicates whether content of the line overflows the specified paragraph width.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_Height">Height</a></td>
<td>Gets the height of a line of text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_Length">Length</a></td>
<td>Gets the total number of TextSource positions of the current line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_NewLineLength">NewLineLength</a></td>
<td>Gets the number of newline characters at the end of a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_OverhangAfter">OverhangAfter</a></td>
<td>Gets the distance that black pixels extend beyond the bottom alignment edge of a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_OverhangLeading">OverhangLeading</a></td>
<td>Gets the distance that black pixels extend prior to the left leading alignment edge of the line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_OverhangTrailing">OverhangTrailing</a></td>
<td>Gets the distance that black pixels extend following the right trailing alignment edge of the line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_Start">Start</a></td>
<td>Gets the distance from the start of a paragraph to the starting point of a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_TextLineBreak">TextLineBreak</a></td>
<td>Gets the state of the line when broken by line breaking process.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_TextRuns">TextRuns</a></td>
<td>Gets the text runs that are contained within a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_TrailingWhitespaceLength">TrailingWhitespaceLength</a></td>
<td>Gets the number of whitespace code points beyond the last non-blank character in a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_Width">Width</a></td>
<td>Gets the width of a line of text, excluding trailing whitespace characters.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_WidthIncludingTrailingWhitespace">WidthIncludingTrailingWhitespace</a></td>
<td>Gets the width of a line of text, including trailing whitespace characters.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_Collapse">Collapse(TextCollapsingProperties[])</a></td>
<td>Create a collapsed line based on collapsed text properties.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_Dispose">Dispose()</a></td>
<td>Releases all resources used by the TextLine</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_Draw">Draw(DrawingContext, Point)</a></td>
<td>Draws the TextLine at the given origin.</td>
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
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_GetBackspaceCaretCharacterHit">GetBackspaceCaretCharacterHit(CharacterHit)</a></td>
<td>Gets the previous character hit after backspacing.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_GetCharacterHitFromDistance">GetCharacterHitFromDistance(Double)</a></td>
<td>Gets the character hit corresponding to the specified distance from the beginning of the line.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_GetDistanceFromCharacterHit">GetDistanceFromCharacterHit(CharacterHit)</a></td>
<td>Gets the distance from the beginning of the line to the specified character hit. <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a>.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_GetNextCaretCharacterHit">GetNextCaretCharacterHit(CharacterHit)</a></td>
<td>Gets the next character hit for caret navigation.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_GetPreviousCaretCharacterHit">GetPreviousCaretCharacterHit(CharacterHit)</a></td>
<td>Gets the previous character hit for caret navigation.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_GetTextBounds">GetTextBounds(Int32, Int32)</a></td>
<td>Get an array of bounding rectangles of a range of characters within a text line.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_Justify">Justify(JustificationProperties)</a></td>
<td>Create a justified line based on justification text properties.</td>
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

