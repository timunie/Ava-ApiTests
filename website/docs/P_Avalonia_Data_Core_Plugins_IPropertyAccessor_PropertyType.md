# PropertyType Property


Gets the type of the property.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Type? PropertyType { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
ReadOnly Property PropertyType As Type
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract PropertyType : Type with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/IPropertyAccessor.cs" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a>

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td>
<td>The accessor has not been subscribed to yet.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor Interface</a>  
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  

