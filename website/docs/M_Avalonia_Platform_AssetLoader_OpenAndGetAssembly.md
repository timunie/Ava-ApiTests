# OpenAndGetAssembly Method


Opens the asset with the requested URI and returns the asset stream and the assembly containing the asset.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static (Stream stream, Assembly assembly) OpenAndGetAssembly(
	Uri uri,
	Uri? baseUri = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function OpenAndGetAssembly ( 
	uri As Uri,
	Optional baseUri As Uri = Nothing
) As (stream As Stream, assembly As Assembly)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member OpenAndGetAssembly : 
        uri : Uri * 
        ?baseUri : Uri 
(* Defaults:
        let _baseUri = defaultArg baseUri null
*)
-> ValueTuple<Stream, Assembly> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/AssetLoader.cs#L27" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uri" target="_blank" rel="noopener noreferrer">Uri</a></dt><dd>The URI.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uri" target="_blank" rel="noopener noreferrer">Uri</a>  (Optional)</dt><dd>A base URI to use if <em>uri</em> is relative.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.valuetuple-2" target="_blank" rel="noopener noreferrer">ValueTuple</a>(<a href="https://learn.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a>, <a href="https://learn.microsoft.com/dotnet/api/system.reflection.assembly" target="_blank" rel="noopener noreferrer">Assembly</a>)  
The stream containing the asset contents together with the assembly.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception" target="_blank" rel="noopener noreferrer">FileNotFoundException</a></td>
<td>The asset could not be found.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Platform_AssetLoader">AssetLoader Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

