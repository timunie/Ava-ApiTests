# Open Method


Opens the asset with the requested URI.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Stream Open(
	Uri uri,
	Uri? baseUri = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function Open ( 
	uri As Uri,
	Optional baseUri As Uri = Nothing
) As Stream
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Open : 
        uri : Uri * 
        ?baseUri : Uri 
(* Defaults:
        let _baseUri = defaultArg baseUri null
*)
-> Stream 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IAssetLoader.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uri" target="_blank" rel="noopener noreferrer">Uri</a></dt><dd>The URI.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uri" target="_blank" rel="noopener noreferrer">Uri</a>  (Optional)</dt><dd>A base URI to use if <em>uri</em> is relative.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a>  
A stream containing the asset contents.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception" target="_blank" rel="noopener noreferrer">FileNotFoundException</a></td>
<td>The asset could not be found.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IAssetLoader">IAssetLoader Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

