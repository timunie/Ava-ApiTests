# Subscribe Method


Subscribes to the value of the member.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Subscribe(
	Action<Object?> listener
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Subscribe ( 
	listener As Action(Of Object)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Subscribe : 
        listener : Action<Object> -> unit 
override Subscribe : 
        listener : Action<Object> -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/PropertyAccessorBase.cs#L33" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd>A method that receives the values.</dd></dl>

#### Implements
<a href="M_Avalonia_Data_Core_Plugins_IPropertyAccessor_Subscribe">IPropertyAccessor.Subscribe(Action(Object))</a>  


## See Also


#### Reference
<a href="T_Avalonia_Data_Core_Plugins_PropertyAccessorBase">PropertyAccessorBase Class</a>  
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  

