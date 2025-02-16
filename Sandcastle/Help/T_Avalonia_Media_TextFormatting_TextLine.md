---
title:TextLine Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TextLine Class




## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public abstract class TextLine : IDisposable
```
**VB**
``` VB
Public MustInherit Class TextLine
	Implements IDisposable
```
**F#**
``` F#
[<AbstractClassAttribute>]
type TextLine = 
    class
        interface IDisposable
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  TextLine</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine__ctor">TextLine()</a></td>
<td>Initializes a new instance of the TextLine class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_Baseline">Baseline</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_Extent">Extent</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_FirstTextSourceIndex">FirstTextSourceIndex</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_HasCollapsed">HasCollapsed</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_HasOverflowed">HasOverflowed</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_Height">Height</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_Length">Length</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_NewLineLength">NewLineLength</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_OverhangAfter">OverhangAfter</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_OverhangLeading">OverhangLeading</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_OverhangTrailing">OverhangTrailing</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_Start">Start</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_TextLineBreak">TextLineBreak</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_TextRuns">TextRuns</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_TrailingWhitespaceLength">TrailingWhitespaceLength</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_Width">Width</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLine_WidthIncludingTrailingWhitespace">WidthIncludingTrailingWhitespace</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_Collapse">Collapse(TextCollapsingProperties[])</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_Dispose">Dispose()</a></td>
<td>Releases all resources used by the TextLine</td></tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_Draw">Draw(DrawingContext, Point)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_GetBackspaceCaretCharacterHit">GetBackspaceCaretCharacterHit(CharacterHit)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_GetCharacterHitFromDistance">GetCharacterHitFromDistance(Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_GetDistanceFromCharacterHit">GetDistanceFromCharacterHit(CharacterHit)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_GetNextCaretCharacterHit">GetNextCaretCharacterHit(CharacterHit)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_GetPreviousCaretCharacterHit">GetPreviousCaretCharacterHit(CharacterHit)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_GetTextBounds">GetTextBounds(Int32, Int32)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLine_Justify">Justify(JustificationProperties)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
