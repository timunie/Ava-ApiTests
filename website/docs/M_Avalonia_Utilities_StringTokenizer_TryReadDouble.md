# TryReadDouble Method




## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryReadDouble(
	out double result,
	char? separator = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryReadDouble ( 
	<OutAttribute> ByRef result As Double,
	Optional separator As Char? = Nothing
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TryReadDouble : 
        result : float byref * 
        ?separator : Nullable<char> 
(* Defaults:
        let _separator = defaultArg separator null
*)
-> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/StringTokenizer.cs#L83" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">Char</a>)  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Utilities_StringTokenizer">StringTokenizer Structure</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

