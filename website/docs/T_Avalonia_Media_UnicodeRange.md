# UnicodeRange Structure


The UnicodeRange descripes a set of Unicode characters.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct UnicodeRange : IEquatable<UnicodeRange>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure UnicodeRange
	Implements IEquatable(Of UnicodeRange)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type UnicodeRange = 
    struct
        inherit ValueType
        interface IEquatable<UnicodeRange>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/UnicodeRange.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  UnicodeRange</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(UnicodeRange)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_UnicodeRange__ctor_1">UnicodeRange(IReadOnlyList(UnicodeRangeSegment))</a></td>
<td>Initializes a new instance of the UnicodeRange class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_UnicodeRange__ctor">UnicodeRange(UnicodeRangeSegment)</a></td>
<td>Initializes a new instance of the UnicodeRange class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_UnicodeRange__ctor_2">UnicodeRange(Int32, Int32)</a></td>
<td>Initializes a new instance of the UnicodeRange class</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_UnicodeRange_IsInRange">IsInRange(Int32)</a></td>
<td>Determines if given value is inside the range.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_UnicodeRange_Parse">Parse(String)</a></td>
<td>Parses a UnicodeRange.</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Media_UnicodeRange_Default">Default</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

