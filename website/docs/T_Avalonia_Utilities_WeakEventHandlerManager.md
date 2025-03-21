# WeakEventHandlerManager Class


Manages subscriptions to events using weak listeners.



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static class WeakEventHandlerManager
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class WeakEventHandlerManager
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<SealedAttribute>]
type WeakEventHandlerManager = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/WeakEventHandlerManager.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  WeakEventHandlerManager</td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Utilities_WeakEventHandlerManager_Subscribe__3">Subscribe(TTarget, TEventArgs, TSubscriber)(TTarget, String, EventHandler(TEventArgs))</a></td>
<td>Subscribes to an event on an object using a weak subscription.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_WeakEventHandlerManager_Unsubscribe__2">Unsubscribe(TEventArgs, TSubscriber)(Object, String, EventHandler(TEventArgs))</a></td>
<td>Unsubscribes from an event.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

