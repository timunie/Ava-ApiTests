# Avalonia.ReactiveUI Namespace






## Classes
<table>
<tr>
<td><a href="T_Avalonia_ReactiveUI_AppBuilderExtensions">AppBuilderExtensions</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_ReactiveUI_AutoDataTemplateBindingHook">AutoDataTemplateBindingHook</a></td>
<td>AutoDataTemplateBindingHook is a binding hook that checks ItemsControls that don't have DataTemplates, and assigns a default DataTemplate that loads the View associated with each ViewModel.</td>
</tr>
<tr>
<td><a href="T_Avalonia_ReactiveUI_AutoSuspendHelper">AutoSuspendHelper</a></td>
<td>A ReactiveUI AutoSuspendHelper which initializes suspension hooks for Avalonia applications. Call its constructor in your app's composition root, before calling the RxApp.SuspensionHost.SetupDefaultSuspendResume method.</td>
</tr>
<tr>
<td><a href="T_Avalonia_ReactiveUI_AvaloniaActivationForViewFetcher">AvaloniaActivationForViewFetcher</a></td>
<td>Determines when Avalonia IVisuals get activated.</td>
</tr>
<tr>
<td><a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_ReactiveUI_AvaloniaScheduler">AvaloniaScheduler</a></td>
<td>A reactive scheduler that uses Avalonia's <a href="T_Avalonia_Threading_Dispatcher">Dispatcher</a>.</td>
</tr>
<tr>
<td><a href="T_Avalonia_ReactiveUI_ReactiveUserControl_1">ReactiveUserControl(TViewModel)</a></td>
<td>A ReactiveUI <a href="T_Avalonia_Controls_UserControl">UserControl</a> that implements the IViewFor interface and will activate your ViewModel automatically if the view model implements IActivatableViewModel. When the DataContext property changes, this class will update the ViewModel property with the new DataContext value, and vice versa.</td>
</tr>
<tr>
<td><a href="T_Avalonia_ReactiveUI_ReactiveWindow_1">ReactiveWindow(TViewModel)</a></td>
<td>A ReactiveUI <a href="T_Avalonia_Controls_Window">Window</a> that implements the IViewFor interface and will activate your ViewModel automatically if the view model implements IActivatableViewModel. When the DataContext property changes, this class will update the ViewModel property with the new DataContext value, and vice versa.</td>
</tr>
<tr>
<td><a href="T_Avalonia_ReactiveUI_RoutedViewHost">RoutedViewHost</a></td>
<td>This control hosts the View associated with ReactiveUI RoutingState, and will display the View and wire up the ViewModel whenever a new ViewModel is navigated to. Nested routing is also supported.</td>
</tr>
<tr>
<td><a href="T_Avalonia_ReactiveUI_ViewModelViewHost">ViewModelViewHost</a></td>
<td>This content control will automatically load the View associated with the ViewModel property and display it. This control is very useful inside a DataTemplate to display the View associated with a ViewModel.</td>
</tr>
</table>
