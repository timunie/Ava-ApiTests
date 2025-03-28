# StringTokenizer(String, Char, String) Constructor


Initializes a new instance of the <a href="T_Avalonia_Utilities_StringTokenizer">StringTokenizer</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public StringTokenizer(
	string s,
	char separator = ',',
	string? exceptionMessage = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	s As String,
	Optional separator As Char = ","C,
	Optional exceptionMessage As String = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        s : string * 
        ?separator : char * 
        ?exceptionMessage : string 
(* Defaults:
        let _separator = defaultArg separator ','
        let _exceptionMessage = defaultArg exceptionMessage null
*)
-> StringTokenizer
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/StringTokenizer.cs#L32" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">Char</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Utilities_StringTokenizer">StringTokenizer Structure</a>  
<a href="Overload_Avalonia_Utilities_StringTokenizer__ctor">StringTokenizer Overload</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

