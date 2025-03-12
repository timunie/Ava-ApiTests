# UnicodeRangeSegment Structure




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct UnicodeRangeSegment : IEquatable<UnicodeRangeSegment>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure UnicodeRangeSegment
	Implements IEquatable(Of UnicodeRangeSegment)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type UnicodeRangeSegment = 
    struct
        inherit ValueType
        interface IEquatable<UnicodeRangeSegment>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/UnicodeRange.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  UnicodeRangeSegment</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(UnicodeRangeSegment)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_UnicodeRangeSegment__ctor">UnicodeRangeSegment(Int32, Int32)</a></td>
<td>Initializes a new instance of the UnicodeRangeSegment class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_UnicodeRangeSegment_End">End</a></td>
<td>Get the end of the segment.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_UnicodeRangeSegment_Start">Start</a></td>
<td>Get the start of the segment.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_UnicodeRangeSegment_IsInRange">IsInRange(Int32)</a></td>
<td>Determines if given value is inside the range segment.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_UnicodeRangeSegment_Parse">Parse(String)</a></td>
<td>Parses a UnicodeRangeSegment.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

