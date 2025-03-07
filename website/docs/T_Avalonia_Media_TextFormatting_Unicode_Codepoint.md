# Codepoint Structure




## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting_Unicode">Avalonia.Media.TextFormatting.Unicode</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct Codepoint : IEquatable<Codepoint>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure Codepoint
	Implements IEquatable(Of Codepoint)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type Codepoint = 
    struct
        inherit ValueType
        interface IEquatable<Codepoint>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/Unicode/Codepoint.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Codepoint</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Codepoint)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_Unicode_Codepoint__ctor">Codepoint(UInt32)</a></td>
<td>Creates a new instance of Codepoint with the specified value.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_BiDiClass">BiDiClass</a></td>
<td>Gets the <a href="T_Avalonia_Media_TextFormatting_Unicode_BidiClass">BidiClass</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_GeneralCategory">GeneralCategory</a></td>
<td>Gets the <a href="T_Avalonia_Media_TextFormatting_Unicode_GeneralCategory">GeneralCategory</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_GraphemeBreakClass">GraphemeBreakClass</a></td>
<td>Gets the <a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_GraphemeBreakClass">GraphemeBreakClass</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_IsBreakChar">IsBreakChar</a></td>
<td>Determines whether this Codepoint is a break char.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_IsWhiteSpace">IsWhiteSpace</a></td>
<td>Determines whether this Codepoint is white space.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_LineBreakClass">LineBreakClass</a></td>
<td>Gets the <a href="T_Avalonia_Media_TextFormatting_Unicode_LineBreakClass">LineBreakClass</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_PairedBracketType">PairedBracketType</a></td>
<td>Gets the <a href="T_Avalonia_Media_TextFormatting_Unicode_BidiPairedBracketType">BidiPairedBracketType</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_ReplacementCodepoint">ReplacementCodepoint</a></td>
<td>The replacement codepoint that is used for non supported values.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_Script">Script</a></td>
<td>Gets the <a href="T_Avalonia_Media_TextFormatting_Unicode_Script">Script</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Codepoint_Value">Value</a></td>
<td>Get the codepoint's value.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_Unicode_Codepoint_IsInRangeInclusive">IsInRangeInclusive(Codepoint, UInt32, UInt32)</a></td>
<td>Returns true if <em>cp</em> is between <em>lowerBound</em> and <em>upperBound</em>, inclusive.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_Unicode_Codepoint_ReadAt">ReadAt(ReadOnlySpan(Char), Int32, Int32)</a></td>
<td>Reads the Codepoint at specified position.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_Unicode_Codepoint_TryGetPairedBracket">TryGetPairedBracket(Codepoint)</a></td>
<td>Gets the codepoint representing the bracket pairing for this instance.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_Unicode_Codepoint_op_Implicit">Implicit(Codepoint to Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_Unicode_Codepoint_op_Implicit_1">Implicit(Codepoint to UInt32)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_TextFormatting_Unicode">Avalonia.Media.TextFormatting.Unicode Namespace</a>  
