---
title:Codepoint Structure
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Codepoint Structure




## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting_Unicode">Avalonia.Media.TextFormatting.Unicode</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public readonly struct Codepoint : IEquatable<Codepoint>
```
**VB**
``` VB
Public Structure Codepoint
	Implements IEquatable(Of Codepoint)
```
**F#**
``` F#
[<SealedAttribute>]
type Codepoint = 
    struct
        inherit ValueType
        interface IEquatable<Codepoint>
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Codepoint</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Codepoint)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_Unicode_Codepoint__ctor">Codepoint(UInt32)</a></td>
<td>Initializes a new instance of the Codepoint class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_BiDiClass">BiDiClass</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_GeneralCategory">GeneralCategory</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_GraphemeBreakClass">GraphemeBreakClass</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_IsBreakChar">IsBreakChar</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_IsWhiteSpace">IsWhiteSpace</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_LineBreakClass">LineBreakClass</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_PairedBracketType">PairedBracketType</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_ReplacementCodepoint">ReplacementCodepoint</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_Script">Script</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_Value">Value</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_Unicode_Codepoint_IsInRangeInclusive">IsInRangeInclusive(Codepoint, UInt32, UInt32)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_Unicode_Codepoint_ReadAt">ReadAt(ReadOnlySpan(Char), Int32, Int32)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_Unicode_Codepoint_TryGetPairedBracket">TryGetPairedBracket(Codepoint)</a></td>
<td> </td></tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_Unicode_Codepoint_op_Implicit">Implicit(Codepoint to Int32)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_Unicode_Codepoint_op_Implicit_1">Implicit(Codepoint to UInt32)</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_TextFormatting_Unicode">Avalonia.Media.TextFormatting.Unicode Namespace</a>  
