# CharacterReader Structure




## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ref struct CharacterReader
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure CharacterReader
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type CharacterReader = 
    struct
        inherit ValueType
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/CharacterReader.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  CharacterReader</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Utilities_CharacterReader__ctor">CharacterReader(ReadOnlySpan(Char))</a></td>
<td>Initializes a new instance of the CharacterReader class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Utilities_CharacterReader_End">End</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Utilities_CharacterReader_Peek">Peek</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Utilities_CharacterReader_Position">Position</a></td>
<td> </td>
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
<td><a href="M_Avalonia_Utilities_CharacterReader_PeekWhitespace">PeekWhitespace()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_CharacterReader_Skip">Skip(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_CharacterReader_SkipWhitespace">SkipWhitespace()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_CharacterReader_Take">Take()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_CharacterReader_TakeIf">TakeIf(Char)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_CharacterReader_TakeIf_1">TakeIf(Func(Char, Boolean))</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_CharacterReader_TakeUntil">TakeUntil(Char)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_CharacterReader_TakeWhile">TakeWhile(Func(Char, Boolean))</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns the fully qualified type name of this instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_CharacterReader_TryPeek">TryPeek(Int32)</a></td>
<td> </td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Utilities_KeywordParser_CheckKeyword">CheckKeyword(String)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Utilities_KeywordParser">KeywordParser</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_IdentifierParser_ParseIdentifier">ParseIdentifier()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Utilities_IdentifierParser">IdentifierParser</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_StyleClassParser_ParseStyleClass">ParseStyleClass()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Utilities_StyleClassParser">StyleClassParser</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_KeywordParser_TakeIfKeyword">TakeIfKeyword(String)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Utilities_KeywordParser">KeywordParser</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

