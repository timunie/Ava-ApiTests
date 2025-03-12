# IWeakEventSubscriber&lt;TEventArgs&gt; Interface


Defines a listener to a event subscribed vis the <a href="T_Avalonia_Utilities_WeakEvent_2">WeakEvent(TSender, TEventArgs)</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IWeakEventSubscriber<in TEventArgs>
where TEventArgs : EventArgs

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IWeakEventSubscriber(Of In TEventArgs As EventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IWeakEventSubscriber<'TEventArgs when 'TEventArgs : EventArgs> = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/IWeakEventSubscriber.cs" title="View the source code">View Source</a>



#### Type Parameters
<dl><dt /><dd>The type of the event arguments.</dd></dl>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Utilities_IWeakEventSubscriber_1_OnEvent">OnEvent(Object, WeakEvent, TEventArgs)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

