# CharacterHit Structure


Represents information about a character hit within a glyph run.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct CharacterHit : IEquatable<CharacterHit>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure CharacterHit
	Implements IEquatable(Of CharacterHit)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type CharacterHit = 
    struct
        inherit ValueType
        interface IEquatable<CharacterHit>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/CharacterHit.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  CharacterHit</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(CharacterHit)</td></tr>
</table>

The CharacterHit structure provides information about the index of the first character that got hit as well as information about leading or trailing edge.

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_CharacterHit__ctor">CharacterHit(Int32, Int32)</a></td>
<td>Initializes a new instance of the CharacterHit structure.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_CharacterHit_FirstCharacterIndex">FirstCharacterIndex</a></td>
<td>Gets the index of the first character that got hit.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_CharacterHit_TrailingLength">TrailingLength</a></td>
<td>Gets the trailing length value for the character that got hit.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_CharacterHit_Equals">Equals(CharacterHit)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_CharacterHit_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_CharacterHit_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
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

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Media_CharacterHit_op_Equality">Equality(CharacterHit, CharacterHit)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_CharacterHit_op_Inequality">Inequality(CharacterHit, CharacterHit)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

