# StringTokenizer Structure




## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public struct StringTokenizer : IDisposable, 
	IEquatable<StringTokenizer>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure StringTokenizer
	Implements IDisposable, IEquatable(Of StringTokenizer)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type StringTokenizer = 
    struct
        inherit ValueType
        interface IDisposable
        interface IEquatable<StringTokenizer>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/StringTokenizer.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  StringTokenizer</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(StringTokenizer)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Utilities_StringTokenizer__ctor">StringTokenizer(String, Char, String)</a></td>
<td>Initializes a new instance of the StringTokenizer class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_StringTokenizer__ctor_1">StringTokenizer(String, IFormatProvider, String)</a></td>
<td>Initializes a new instance of the StringTokenizer class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Utilities_StringTokenizer_CurrentToken">CurrentToken</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Utilities_StringTokenizer_Dispose">Dispose()</a></td>
<td>Releases all resources used by the StringTokenizer</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_StringTokenizer_ReadDouble">ReadDouble(Nullable(Char))</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_StringTokenizer_ReadInt32">ReadInt32(Nullable(Char))</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_StringTokenizer_ReadString">ReadString(Nullable(Char))</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_StringTokenizer_TryReadDouble">TryReadDouble(Double, Nullable(Char))</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_StringTokenizer_TryReadInt32">TryReadInt32(Int32, Nullable(Char))</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_StringTokenizer_TryReadString">TryReadString(String, Nullable(Char))</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

