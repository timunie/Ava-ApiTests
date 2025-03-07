# TextRange Structure


References a portion of a text buffer.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct TextRange : IEquatable<TextRange>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure TextRange
	Implements IEquatable(Of TextRange)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type TextRange = 
    struct
        inherit ValueType
        interface IEquatable<TextRange>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextRange.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  TextRange</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(TextRange)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextRange__ctor">TextRange(Int32, Int32)</a></td>
<td>Initializes a new instance of the TextRange class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextRange_End">End</a></td>
<td>Gets the end.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextRange_Length">Length</a></td>
<td>Gets the length.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextRange_Start">Start</a></td>
<td>Gets the start.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextRange_Skip">Skip(Int32)</a></td>
<td>Bypasses a specified number of elements in the slice and then returns the remaining elements.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextRange_Take">Take(Int32)</a></td>
<td>Returns a specified number of contiguous elements from the start of the slice.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
