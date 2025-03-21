# FindAsync Method


Finds a named element in the name scope, waits for the scope to be completely populated before returning null Returned task is configured to run any continuations synchronously.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
SynchronousCompletionAsyncResult<Object> FindAsync(
	string name
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function FindAsync ( 
	name As String
) As SynchronousCompletionAsyncResult(Of Object)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract FindAsync : 
        name : string -> SynchronousCompletionAsyncResult<Object> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/INameScope.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The name.</dd></dl>

#### Return Value
<a href="T_Avalonia_Utilities_SynchronousCompletionAsyncResult_1">SynchronousCompletionAsyncResult</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)  
The element, or null if the name was not found.

## See Also


#### Reference
<a href="T_Avalonia_Controls_INameScope">INameScope Interface</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

