# Grapheme Structure


Represents the smallest unit of a writing system of any given language.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting_Unicode">Avalonia.Media.TextFormatting.Unicode</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly ref struct Grapheme
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure Grapheme
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type Grapheme = 
    struct
        inherit ValueType
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/Unicode/Grapheme.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Grapheme</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_Unicode_Grapheme__ctor">Grapheme(Codepoint, Int32, Int32)</a></td>
<td>Initializes a new instance of the Grapheme class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Grapheme_FirstCodepoint">FirstCodepoint</a></td>
<td>The first <a href="T_Avalonia_Media_TextFormatting_Unicode_Codepoint">Codepoint</a> of the grapheme cluster.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Grapheme_Length">Length</a></td>
<td>Gets the length of this grapheme, in code units.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_Grapheme_Offset">Offset</a></td>
<td>Gets the starting code unit offset of this grapheme inside its containing text.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Indicates whether this instance and a specified object are equal.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Returns the hash code for this instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns the fully qualified type name of this instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_TextFormatting_Unicode">Avalonia.Media.TextFormatting.Unicode Namespace</a>  

