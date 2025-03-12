# GetProvider&lt;T&gt; Method


Tries to get a provider of the specified type from the peer.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public T GetProvider<T>()

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetProvider(Of T) As T
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetProvider : unit -> 'T 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Automation/Peers/AutomationPeer.cs#L188" title="View the source code">View Source</a>



#### Type Parameters
<dl><dt /><dd>The provider type.</dd></dl>

#### Return Value
T  
The provider, or null if not implemented on this peer.

## See Also


#### Reference
<a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer Class</a>  
<a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers Namespace</a>  

