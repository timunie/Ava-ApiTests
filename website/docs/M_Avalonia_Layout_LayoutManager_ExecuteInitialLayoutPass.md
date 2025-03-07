# ExecuteInitialLayoutPass Method


Executes the initial layout pass on a layout root.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public virtual void ExecuteInitialLayoutPass()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overridable Sub ExecuteInitialLayoutPass
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ExecuteInitialLayoutPass : unit -> unit 
override ExecuteInitialLayoutPass : unit -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/LayoutManager.cs#L182" title="View the source code">View Source</a>



#### Implements
<a href="M_Avalonia_Layout_ILayoutManager_ExecuteInitialLayoutPass">ILayoutManager.ExecuteInitialLayoutPass()</a>  
You should not usually need to call this method explictly, the layout root will call it to carry out the initial layout of the control.

## See Also


#### Reference
<a href="T_Avalonia_Layout_LayoutManager">LayoutManager Class</a>  
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  
