# PropertyType Property


Gets the type of the property.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override Type? PropertyType { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides ReadOnly Property PropertyType As Type
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract PropertyType : Type with get
override PropertyType : Type with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/DataValidationBase.cs#L28" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a>

#### Implements
<a href="P_Avalonia_Data_Core_Plugins_IPropertyAccessor_PropertyType">IPropertyAccessor.PropertyType</a>  


## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td>
<td>The accessor has not been subscribed to yet.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Data_Core_Plugins_DataValidationBase">DataValidationBase Class</a>  
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  

