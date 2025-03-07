# TryReadInt32 Method




## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryReadInt32(
	out int result,
	char? separator = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryReadInt32 ( 
	<OutAttribute> ByRef result As Integer,
	Optional separator As Char? = Nothing
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TryReadInt32 : 
        result : int byref * 
        ?separator : Nullable<char> 
(* Defaults:
        let _separator = defaultArg separator null
*)
-> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/StringTokenizer.cs#L58" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">Char</a>)  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Utilities_StringTokenizer">StringTokenizer Structure</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  
