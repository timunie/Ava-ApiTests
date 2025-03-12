# VerifyAccess Method


Checks that the current thread is the UI thread and throws if not.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void VerifyAccess()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub VerifyAccess
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract VerifyAccess : unit -> unit 
override VerifyAccess : unit -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/Dispatcher.cs#L77" title="View the source code">View Source</a>



#### Implements
<a href="M_Avalonia_Threading_IDispatcher_VerifyAccess">IDispatcher.VerifyAccess()</a>  


## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td>
<td>The current thread is not the UI thread.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

